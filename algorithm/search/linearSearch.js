// implementasi linear search dalam javascript
// Language: javascript

function linearSearch(arr, item) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
