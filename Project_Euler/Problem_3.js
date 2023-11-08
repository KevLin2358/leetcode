const largestPrimeFactor = (num) => {
    if ((num - 1) % 2 === 0) {
        for (let i = num - 2; i >= 2; i -= 2) {
            if (num % i === 0 && isPrime(i)) return i;
        }
    } else {
        for (let i = num - 1; i >= 2; i -= 2) {
            if (num % i === 0 && isPrime(i)) return i;
        }
    }
}

const isPrime = (num) => {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(largestPrimeFactor(600851475143));