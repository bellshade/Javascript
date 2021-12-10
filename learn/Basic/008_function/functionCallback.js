// == Contoh == //

/**
 * Membuat function yang menerima function lain sebagai parameter
 */
function masukkanFunction(functionCallback) {
  /**
   * passParam adalah variable yang akan kita terima di functionCallback
   */
  const passParam = "hai";
  return functionCallback(passParam); // Panggil functionCallback dan jalankan kode yang di berikan.
}

/**
 * Memanggil function didalam masukkanFunction (functionCallback)
 */
masukkanFunction(function (parameter) {
  // Membuat function anonymous
  console.log(parameter); // Akan print 'Hai' di console.
});
