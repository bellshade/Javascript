(function () {
  console.log("self-invoking function");
})();

//self-invoking function dengan parameter
(function (name) {
  console.log("halo," + name);
})("boss");
