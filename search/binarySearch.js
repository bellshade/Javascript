// Implementasi Binary Search dalam JavaScript
// Language: javascript

function binarySearchRecursive(arr, x, low = 0, high = arr.length - 1) {
  const mid = Math.floor(low + (high - low) / 2);
  if (high >= low) {
    if (arr[mid] === x) {
      return mid;
    }

    if (x < arr[mid]) {
      return binarySearchRecursive(arr, x, low, mid - 1);
    } else {
      return binarySearchRecursive(arr, x, mid + 1, high);
    }
  } else {
    return -1;
  }
}

function binarySearchIterative(arr, x, low = 0, high = arr.length - 1) {
  while (high >= low) {
    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArr = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliet",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-Ray",
  "Yankee",
  "Zulu"
];

console.log(binarySearchRecursive(arr, 3));
console.log(binarySearchIterative(arr, 7));
console.log(binarySearchRecursive(arr, 13));

console.log(binarySearchIterative(stringArr, "Whiskey"));
console.log(binarySearchRecursive(stringArr, "Zulu"));
console.log(binarySearchIterative(stringArr, "Sierra"));
