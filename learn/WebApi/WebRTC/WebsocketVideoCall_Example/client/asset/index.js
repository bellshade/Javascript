const socket = new WebSocket(location.origin.replace(/^http/, 'ws'));
// RTC PEER LAWAN
const peer = {};

// KONFIGURASI STUN SERVER ( BISA JUGA DITAMBAHKAN TURN SERVER )
const peerConfiguration = {
    iceServers: [{
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    }, ],
    iceCandidatePoolSize: 10,
};

// NGAMBIL ELEMENT VIDEO BIAR AUTO PLAY PAS DIKASIH DATA
document.getElementById("ourself").onloadedmetadata = (e) => e.target.play();
document.getElementById("remote").onloadedmetadata = (e) => e.target.play();

// PACKET HANDLER
const sockEv = {
    // SIMPEN ID
    "applyId": ({
        id
    }) => {
        document.getElementById("idInfo").innerText = id;
    },
    "newIce": (data) => {
        // EVENT DAPET ICE BARU
        if (peer && peer.peer) {
            // TAMBAHKAN ICE CANDIDATENYA KE PEER KITA
            peer.peer.addIceCandidate(new RTCIceCandidate(JSON.parse(data.candidate)));
        }
    },
    // EVENT KITA DAPET JAWABAN DARI LAWAN
    "answer": initCall,
    // EVENT KITA SEDANG DIPANGGIL OLEH ORANG
    "call": answerCall,
    // EVENT KITA DAPET ANSWER, JADIKAN ANSWER ITU SEBAGAI REMOTE DESCRIPTION
    "setRemote": (data) => {
        if (peer.id == data.id) peer.peer.setRemoteDescription(JSON.parse(data.sdp))
    },
    // EVENT MENGHAPUS PEER ( PANGGILAN DIPUTUS )
    "delPeer": ({
        id
    }) => {
        if (peer.id !== id)
            return;
        peer = {};
    }
};

// EVENT KALO ADA PESAN DARI SERVER
socket.addEventListener("message", ({
    data // PESAN
}) => {
    const msg = JSON.parse(data); // DI PARSE DULU

    if (!msg) // CEK KALO GAGAL PARSE, BERARTI PAKETNYA INVALID
        return;

    // MENCARI FUNGSI YANG SESUAI DENGAN TIPE PAKET
    (sockEv[msg.type] || (() => {}))(msg)
})

// FUNGSI BUAT MEMANGGIL ORANG
function call() {

    // DAPETIN ID ORANG YANG AKAN DIPANGGIL DARI INPUT
    const callingTo = document.getElementById("callInput").value;

    // CEK KALO KITA UDAH MANGGIL DIA BELUM
    if (!peer.id) {
        peer.id = callingTo;

        sendIt("startCall", {
            id: callingTo
        });
    }
};

function answerCall(data = {}) {
    // KALO UDAH ADA PEER ID ( BERARTI UDAH DIPANGGIL ORANG ) GAUSAH DI RESPON
    if (peer.id) {
        return;
    }

    peer.id = data.id;

    // BIKIN KONEKSI PEER
    const rtcpeer = new RTCPeerConnection(peerConfiguration);

    // EVENT KALO ADA TRACK (VIDEO/AUDIO)
    rtcpeer.ontrack = e => {
        document.getElementById("remote").srcObject = e.streams[0]
    };


    // KALO ADA ICE CANDIDATE BARU KIRIM KE LAWAN
    rtcpeer.onicecandidate = ({
        candidate
    }) => {
        if (candidate) {
            sendIt("newIce", {
                candidate: JSON.stringify(candidate),
                id: data.id,
            });
        }
    };


    // DAPETIN AUDIO/VIDEO INPUT
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(media => {

        media.getTracks().forEach(track => {
            // SIMPEN TRACK KE RTCPEER BUAT DI NEGOSIASI
            rtcpeer.addTrack(track, media);
        });

        document.getElementById("ourself").srcObject = media;

        // PENTING! JANGAN BIKIN ANSWER SEBELUM NAMBAH TRACK, SETIAP PERUBAHAN MEMBUTUHKAN NEGOSIASI JADI PASTIKAN UDAH DAPET TRACKNYA
        rtcpeer.createAnswer().then(o => {
            sendIt("setRemote", {
                id: data.id,
                sdp: JSON.stringify(o)
            });

            rtcpeer.setLocalDescription(o)
            peer.peer = rtcpeer;
        });

    });
    rtcpeer.setRemoteDescription(JSON.parse(data.sdp));
}

function initCall(data) {

    // PASTIKAN KITA INIT CALL KE ORANG YANG SAMA
    if (peer.id !== data.id) {
        return;
    }

    // SAMA SEPERTI DIATAS ---
    const rtcpeer = new RTCPeerConnection(peerConfiguration);
    rtcpeer.ontrack = e => {
        document.getElementById("remote").srcObject = e.streams[0];
    };

    rtcpeer.onicecandidate = ({
        candidate
    }) => {
        if (candidate) {
            sendIt("newIce", {
                candidate: JSON.stringify(candidate),
                id: data.id,
            });
        }
    };

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(media => {
        media.getTracks().forEach(track => {
            rtcpeer.addTrack(track, media);
        })
        document.getElementById("ourself").srcObject = media;
        // --- SAMA SEPERTI DIATAS

        rtcpeer.createOffer({
            offerToReceiveAudio: true, // KITA MENERIMA AUDIO
            offerToReceiveVideo: true // KITA MENERIMA VIDEO
        }).then(o => {
            rtcpeer.setLocalDescription(o);
            sendIt("call", {
                id: data.id,
                sdp: JSON.stringify(o)
            });
            peer.peer = rtcpeer;
        });
    });
}

// BIAR GAK NULIS 'type: ' BERKALI KALI 
function sendIt(type = "", obj = {}) {
    socket.send(JSON.stringify({
        type: type,
        ...obj
    }));
}