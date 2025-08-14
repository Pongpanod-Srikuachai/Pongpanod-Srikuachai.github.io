function validateInput(input) {
    const num = Number(input);
    return Number.isInteger(num) && num > 0;
}

function findPrimes(limit) {
    let primes = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
}

function displayPrimes(primes, limit) {
    alert(`For n = ${limit} prime numbers are ${primes.join(",")}`);
}

window.onload = function() {
    let n;
    while (true) {
        n = prompt("Enter a positive integer");
        if (validateInput(n)) {
            n = parseInt(n, 10);
            break;
        }
    }
    const primes = findPrimes(n);
    displayPrimes(primes, n);
};
