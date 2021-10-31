function main() {
  function preCode(selector) {
    let els = Array.prototype.slice.call(
      document.querySelectorAll(selector),
      0
    );

    els.forEach(function (el) {
      let txt = el.textContent
        .replace(/^[\r\n]+/, "") // strip leading newline
        .replace(/\s+$/g, ""); // strip trailing whitespace

      if (/^\S/gm.test(txt)) {
        el.textContent = txt;
        return;
      }

      let mat,
        str,
        re = /^[\t ]+/gm,
        len,
        min = 1e3;

      while ((mat = re.exec(txt))) {
        len = mat[0].length;

        if (len < min) {
          min = len;
          str = mat[0];
        }
      }

      if (min === 1e3) {
        return;
      }

      el.textContent = txt.replace(new RegExp(`^${str}`, "gm"), "");
    });
  }

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      preCode("pre code, textarea");
    },
    false
  );
}

main();
