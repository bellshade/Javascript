// implementasi hexadesimal ke rgb
function hexToRgb(hexString) {
  let r = hexString.substring(0, 2);
  let g = hexString.substring(2, 4);
  let b = hexString.substring(4, 6);

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  const obj = { r, g, b };

  return obj;
}

console.log(hexToRgb("ffffff"));
