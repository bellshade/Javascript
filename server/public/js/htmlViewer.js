/*eslint-disable no-undef */

const decoder = new TextDecoder();

function main() {
  window.addEventListener("message", function (response) {
    if (response.data && response.data.source === "iframe") {
      const message = response.data.message
        .map((msg) => decoder.decode(msg))
        .join(" ");

      outputAppender(message);
    }
  });
}

main();
