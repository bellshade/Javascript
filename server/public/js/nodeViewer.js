/*eslint-disable no-undef */

const pathname = window.location.pathname;
const dec = new TextDecoder();

const decoder = message => dec.decode(message);

function main() {
  const runBtn = document.querySelector("button.run");
  const socket = io();

  let currentFile = "";

  const commonAppender = ({ message }) => {
    const pesan = decoder(message);

    outputAppender(pesan);
  };

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

  socket.on("child:stdout", commonAppender);
  socket.on("child:stderr", commonAppender);

  socket.on("child:close", ({ code }) => {
    runBtn.disabled = false;

    outputAppender(
      `Kode ${currentFile} selesai dijalankan dengan kode ${code}`
    );

    currentFile = "";
  });

  socket.on("file:error", () => {
    runBtn.disabled = false;
  });

  document.querySelectorAll(".nav.nav-tabs .nav-link").forEach(nav => {
    nav.addEventListener(
      "click",
      () => (document.querySelector(".console .wrapper").innerHTML = "")
    );
  });
}

main();
