const threeOrFive = (num) => {
    let sum = 0; 

    for (let i = 3; i < num; i++) {
        let cond1 = i % 3 === 0;
        let cond2 = i % 5 === 0;
        
        if (cond1 || cond2) sum += i;
    }

    return sum;
}

console.log(threeOrFive(1000));