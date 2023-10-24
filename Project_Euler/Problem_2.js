const evenFib = (num) => {
    let evenSum = 0;

    let seq = [1, 1];

    while (seq[seq.length - 1] <= num) {
        let total = seq[seq.length - 1] + seq[seq.length - 2];

        if (total % 2 === 0) evenSum += total;
        seq.push(total);
    }

    return evenSum;
}

console.log(evenFib(4_000_000));