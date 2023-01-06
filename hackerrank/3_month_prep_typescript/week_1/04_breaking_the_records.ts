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
//  * Complete the 'breakingRecords' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY scores as parameter.
//  */

function breakingRecords(scores: number[]): number[] {
    // Write your code here
    //initialize the min and max
    let min = scores[0];
    let max = scores[0];
    
    let result = [0, 0]; // max , min
    
    for(let i = 1; i < scores.length; i++){
        if(scores[i] < min){
            min = scores[i];
            result[1]+=1;
        }
        
        if(scores[i] > max){
            max = scores[i];
            result[0]+=1;
        }
    }
    
    return result;
}

// function main() {
//     const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

//     const n: number = parseInt(readLine().trim(), 10);

//     const scores: number[] = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

//     const result: number[] = breakingRecords(scores);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }