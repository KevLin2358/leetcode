// 'use strict';

// import { WriteStream, createWriteStream } from "fs";
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
//  * Complete the 'timeConversion' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts STRING s as parameter.
//  */

function timeConversion(s: string): string {
    // Write your code here
    let hour = s.slice(0,2);
    const minutes = s.slice(3,5);
    const seconds = s.slice(6,8)
    const aOp = s.slice(8);
    const numberHour = Number(hour);

    if(hour === "12" && aOp === "AM") hour = "00";
    if(aOp === "PM" && numberHour < 12) hour = `${numberHour + 12}`;
    
    let result = `${hour}:${minutes}:${seconds}`;
    return result;
}

// function main() {
//     const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

//     const s: string = readLine();

//     const result: string = timeConversion(s);

//     ws.write(result + '\n');

//     ws.end();
// }
