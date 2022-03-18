let arr = [1,2,3];
let arr1 = arr;
console.log(arr==arr1);
arr1 = JSON.parse(JSON.stringify(arr));
console.log(arr == arr1);
console.log(arr1);
console.log(arr);