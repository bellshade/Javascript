/*eslint-disable security/detect-non-literal-fs-filename */

const fs = require("fs");
const path = require("path");
const marked = require("marked");
const emoji = require("node-emoji");

const { ROOT } = require("../config/constant");

// contoh yang valid: img src="img/ns1.jpg
// const imageSrcRegex = new RegExp('img src="(?!http(s?))', "g");
const imageSrcRegex = /img src="(?!http(s?))/g;
const emojiReplacer = match => emoji.emojify(match);

/*
 * Replacer tombol navigasi, valid ketika anchor berisi image
 * yang srcnya merujuk ke badge maker api bellshade
 *
 * Regex dasarnya seperti ini
 * new RegExp("(<a href=(.*)>)(<img align=(.*) src=(\"https://api.bellshade.org/badge/.*\") />)(</a>)")
 *
 * Yang pertama berupa regex global untuk mencari,
 * Yang kedua berupa regex yang memudahkan untuk mengganti value
 */
const navigationSearcher =
  /(<a href=(.*)>)(<img align=(.*) src=("https:\/\/api.bellshade.org\/badge\/.*") \/>)(<\/a>)/g;
const navigationReplacer =
  /(<a href=(.*)>)(<img align=(.*) src=("https:\/\/api.bellshade.org\/badge\/.*") \/>)(<\/a>)/;

const Parser = (readmePath, originalURL) => {
  const normalize = path.normalize(readmePath);
  const fullPath = path.join(ROOT, normalize);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const markdown = fs.readFileSync(fullPath, "utf8");

  const result = marked.parse(markdown);

  let replaceAll = result
    // replace CONTRIBUTING.md untuk di arahkan ke github
    .replace(
      "CONTRIBUTING.md",
      "https://github.com/bellshade/Javascript/blob/main/CONTRIBUTING.md"
    )
    // replace semua yang valid menurut regex
    .replace(imageSrcRegex, `img src="${path.join("/static", originalURL)}/`)
    // Replace emoji github, diubah ke unicode
    .replace(/(:.*:)/g, emojiReplacer);

  // Mencari semua tombol navigasi yang ada, jika ada lakukan perulangan
  const searchMatchNavigationButton = replaceAll.match(navigationSearcher);
  if (Array.isArray(searchMatchNavigationButton)) {
    searchMatchNavigationButton.forEach(button => {
      // Mengcopy value dari tombol yang ada
      const copyButton = [...button].join("");

      // Rematch ulang tombol yang dapat perulangan navigasi yang valid
      /* Keterangan reMatch
       * index 0: Valuenya sama seperti button
       * index 1: Valuenya hanya berupa <a href="{navigasi yang salah}">
       * index 2: Valuenya hanya berupa path navigasi yang salah, misal
       * "../012_string_includes"
       */
      const reMatch = button.match(navigationReplacer);

      // Mendapatkan path yang seharusnya
      const realPath = path.posix.normalize(
        `${originalURL}/${reMatch[2].replace(/"/g, "")}`
      );

      // Mengganti href yang salah
      const replaced = copyButton.replace(reMatch[1], `<a href="${realPath}">`);

      // Assign ulang tombol navigasi yang diganti
      replaceAll = replaceAll.replace(button, replaced);
    });
  }

  return replaceAll;
};

module.exports = Parser;
