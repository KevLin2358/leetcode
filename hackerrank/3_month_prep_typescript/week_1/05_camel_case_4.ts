// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString: string = '';
let inputLines: string[] = [];
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

function main() {
    // Enter your code here
    for(let line of inputLines){
        const op = line[0];
        const op2 = line[2];
        const word = line.slice(4).split("");
        let result = helperInput(op, op2, word);
        console.log(result)
    }
}

function helperInput(op: string, op2: string, word: string[] ){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let upper = false;
    
    if(op ==='S') word[0] = word[0].toLowerCase();
    
    for(let i = 0; i < word.length; i++){
        if(op === 'S'){
            if(capital.includes(word[i])) result += ` ${word[i].toLowerCase()}`
            else if(!alphabet.includes(word[i])) continue
            else result += word[i];
        }
        
        if(op === 'C'){
            
            if(op2 === 'C' && i === 0) result+= word[i].toUpperCase();
            else if(upper === true){
                result += word[i].toUpperCase();
                upper = false;
            }
            else if(word[i] === " ")upper = true;
            else if(i === word.length - 1 && op2 === 'M') result+= '()';
            else result += word[i];
        }
    }
    return result;
}
