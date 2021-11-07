const pathname = window.location.pathname;

const decoder = (message) => {
  const enc = new TextDecoder("utf-8");

  return enc.decode(message);
};

function main() {
  const runBtn = document.querySelector("button.run");
  const socket = io();

  let currentFile = "";

  runBtn.addEventListener("click", () => {
    const currentlyActive = document.querySelector(
      ".nav.nav-tabs .nav-link.active"
    );

    currentFile = currentlyActive.innerText.trim();

    socket.emit("file:run", {
      url: pathname,
      name: currentFile
    });

    runBtn.disabled = true;
  });

  socket.on("child:stdout", ({ message }) => {
    const pesan = decoder(message);

    outputAppender(pesan);
  });
  socket.on("child:stderr", ({ message }) => {
    const pesan = decoder(message);

    outputAppender(pesan);
  });

  socket.on("child:close", ({ code }) => {
    runBtn.disabled = false;

    outputAppender(
      `Kode ${currentFile} selesai dijalankan dengan kode ${code}`
    );

    currentFile = "";
  });
}

main();
