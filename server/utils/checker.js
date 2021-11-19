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
  arr.every(({ type }) => type === "directory");

const includedHtml = constructor((arr) =>
  arr.some(({ extension }) => extension === "html")
);
const someIsJs = constructor((arr) =>
  arr.some(({ extension }) => extension === "js")
);

module.exports = { notIncludedAnyFile, includedHtml, someIsJs };
