# **WebRTC**
WebRTC adalah projek open source menyediakan  Web Browser dan *Mobile Apps* kemampuan untuk melakukan *real time communication* melalui API.
## Kegunaaan
WebRTC bisa digunakan untuk peer-to-peer data tansfer (menggunakan Data Channel) ataupun *Real Time Communication* seperti video/voice call
## Gambaran Umum
Menggunakan WebRTC cukup mudah, segala keribetannya sudah di urus oleh browser tugas kita sebagai dev hanya membuat signaling server, turn/stun server untuk membangun koneksi. Gambaran umum tentang apa yang harus kita lakukan adalah: pertama client a akan membuat sebuah offer yang lalu dikirim ke signaling server (yang kita buat). Lalu dari signaling server, offer tadi akan dikirim ke client b. Lalu ketika offernya sampai di client b, client b akan mengatur/meng-set offer tadi menjadi Remote Descriptornya. Setelah itu client b akan membuat answer yang lalu akan dikirimkan ke client a lewat signaling server. Setelah client a mendapatkan answer, answer tersebut akan di set sebagai remote descriptor. Setelah kedua pihak sudah mendapatkan dan bertukar SDP masing masing mereka akan bernegosiasi tentang jalur koneksi. Jika sudah selesai negosiasi maka dua pihak akan connect dan sampai itulah tugas kita sebagai developer untuk membuat koneksi.
## Penjelasan dan Tutorial
Penjelasan dan tutorial sendiri sebenarnya sudah banyak di youtube, tujuan saya membuat ini untuk barang kali ada yang kebingungan mencari source yang bagus dan contoh aplikasi webrtc (+ sedikit penjelasan di bahasa indonesia). Berikut video youtube yang saya sarankan
| Bahasa | Link | By |
| - | - | - |
| IND | [Tutorial WebRTC Dasar: Bahasa Indonesia](https://www.youtube.com/watch?v=hF2aKt9CJY8) | Sam Zuhal Setiawan |
| ENG | [WebRTC Short Course](https://www.youtube.com/watch?v=FExZvpVvYxA) | Hussein Nasser |
| ENG | [WebRTC in 100 Seconds // Create a Video Chat app from Scratch](https://youtu.be/WmR9IMUD_CY) | Fireship |
| ENG | [Real-time communication with WebRTC: Google I/O 2013](https://youtu.be/p2HzZkd2A40) | Google Developers

#### Sumber lainnya
- [WebRTC API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
- [WebRTC - Google Developers](https://webrtc.org/)
- [WebRTC Samples](https://webrtc.github.io/samples/)
- [WebRTC - Wikipedia](https://en.wikipedia.org/wiki/WebRTC#Applications)
