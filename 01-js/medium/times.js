/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    sum=0;
    let curTime = new Date();
    while(n>0){
        sum+=n;
        n--;
    }
    return (new Date() - curTime)/1000;
}
var a = calculateTime(100);
var b = calculateTime(100000);
var c = calculateTime(1000000000);