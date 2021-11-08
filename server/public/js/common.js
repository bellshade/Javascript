/*eslint-disable detect-non-literal-regexp */

const consoleWrapper = document.querySelector(".console .wrapper");
const powThree = 1000;

const outputAppender = (string) => {
  const container = document.createElement("div");
  container.setAttribute("class", "output px-2");

  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-chevron-right");

  const code = document.createElement("code");
  code.innerText = string;

  // append
  container.append(icon);
  container.append(code);

  // write to console
  consoleWrapper.append(container);
};

function preCode(selector) {
  let els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);

  els.forEach(function (el) {
    let txt = el.textContent
      .replace(/^[\r\n]+/, "") // strip leading newline
      .replace(/\s+$/g, ""); // strip trailing whitespace

    if (/^\S/gm.test(txt)) {
      el.textContent = txt;
      return;
    }

    let mat;
    let str;
    let re = /^[\t ]+/gm;
    let len;
    let min = powThree;

    while (re.exec(txt)) {
      mat = re.exec(txt);
      len = mat[0].length;

      if (len < min) {
        min = len;
        str = mat[0];
      }
    }

    if (min === powThree) {
      return;
    }

    const regex = new RegExp(`^${str}`, "gm");
    el.textContent = txt.replace(regex, "");
  });
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    preCode("pre code, textarea");
  },
  false
);
