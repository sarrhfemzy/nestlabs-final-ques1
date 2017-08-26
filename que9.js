// Mergesort
var array = [305,37,239,205,36,30,12,15,49,47,112,105,219,90,42];

// top-down Mergesort implementation

function mergeSortTopDown(array) {
if(array.length < 2) {
return array;
}
var middle = Math.floor(array.length / 2);
var left = array.slice(0, middle);
var right = array.slice(middle);
return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
function mergeTopDown(left, right) {
var array = [];
while(left.length && right.length) {
if(left[0] < right[0]) {
array.push(left.shift());
} else {
array.push(right.shift());
}
}
return array.concat(left.slice()).concat(right.slice());
}
console.log("TopDown");
console.log(mergeSortTopDown(array.slice()));



// bottom-up mergesort implementation
function mergeSortBottomUp(array) {
var step = 1;
while (step < array.length) {
var left = 0;
while (left + step < array.length) {
mergeBottomUp(array, left, step);
left += step * 2;
}
    step *= 2;
}
return array;
}
function mergeBottomUp(array, left, step) {
var right = left + step;
var end = Math.min(left + step * 2 - 1, array.length - 1);
var leftMoving = left;
var rightMoving = right;
var temp = [];
for (var i = left; i <= end; i++) {
if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
leftMoving < right) {
temp[i] = array[leftMoving];
leftMoving++;
} else {
temp[i] = array[rightMoving];
rightMoving++;
}
}
for (var j = left; j <= end; j++) {
array[j] = temp[j];
}
}
console.log("bottomUp")
console.log(mergeSortBottomUp(array.slice()));