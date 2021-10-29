const checkIsArray = (array) => {
  if (!array) {
    return new Error("Array is undefined");
  }

  return Array.isArray(array);
};

const constructor = (cb) => (array) => {
  const isValid = checkIsArray(array);

  if (!isValid) {
    return new Error("Not an array");
  }

  return cb(array);
};

const notIncludedAnyFile = (arr) =>
  arr.some((item) => !item.name.includes("."));

const includedHtml = constructor((arr) =>
  arr.some(({ name }) => name.includes(".html"))
);
const someIsJs = constructor((arr) =>
  arr.some(({ name }) => name.includes(".js"))
);

module.exports = { notIncludedAnyFile, includedHtml, someIsJs };
