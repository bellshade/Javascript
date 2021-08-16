// Implementasi Binary Search dalam JavaScript
// Language: javascript


function binarySearch(arr, target, low, high) {
    if (low > high) {
        return -1;
    }
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, high);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 0, 10));