function queue(arr, item) {
  arr.push(item);
  return arr.shift();
}

var arr = [1, 2, 3, 4, 5];

console.log(JSON.stringify(arr));
console.log(queue(arr, 6));
console.log(JSON.stringify(arr));
