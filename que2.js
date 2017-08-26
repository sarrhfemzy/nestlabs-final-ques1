//ques 4
//How do you find the second highest number in an integer array?
function secondHigh(){ 
    // initialise your array
    var arr = [1,2,3,4,5]; 
    // getting the max of the array
    var max = Math.max.apply(null, arr); 
    // remove max from the array
    arr.splice(arr.indexOf(max), 1); 
    // gets the 2nd max
    return Math.max.apply(null, arr); 
};
secondHigh();
console.log(secondHigh());