function main() {
  window.addEventListener("message", function (response) {
    if (response.data && response.data.source === "iframe") {
      const message = response.data.message;

      if (Array.isArray(message)) {
        const stringToAppend = message
          .map((d) =>
            Array.isArray(d)
              ? JSON.stringify(d).replace(/,/g, ", ")
              : d === null
              ? "null"
              : d
          )
          .join(" ");

        outputAppender(stringToAppend);
      }
    }
  });
}

main();
