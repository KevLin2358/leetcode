// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';

//     main();
// });

// function readLine(): string {
//     return inputLines[currentLine++];
// }

// /*
//  * Complete the 'miniMaxSum' function below.
//  *
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    let newArr = arr.sort();
    let min = 0;
    let max = 0;
    for(let i = 0; i < newArr.length -1; i++){
        min += newArr[i];
    }
    for(let i = 1; i < newArr.length; i++){
        max += newArr[i];
    }
    console.log(min + " " + max)
}

// function main() {

//     const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     miniMaxSum(arr);
// }
