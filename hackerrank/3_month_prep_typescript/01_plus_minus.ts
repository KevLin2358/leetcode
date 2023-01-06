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

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    let zero = 0;
    let pos = 0;
    let neg = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0) zero+=1;
        else if(arr[i] < 0)neg+=1;
        else pos+=1;
    }
    console.log(pos/arr.length);
    console.log(neg/arr.length);
    console.log(zero/arr.length);
    
}

// function main() {
//     const n: number = parseInt(readLine().trim(), 10);

//     const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     plusMinus(arr);
// }
