// Prime factors
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
// First prime numbers  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
// 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199

// Como calcular um número primo
// Como fatoriar um número

// Primos só podem ser divididos por 1 e por eles mesmos

// While n is divisible by 2, print 2 and divide n by 2.
// After step 1, n must be odd. Now start a loop from i = 3 to square root of n. While i divides n, print i and divide n by i, 
// increment i by 2 and continue.
// If n is a prime number and is greater than 2, then n will not become 1 by above two steps. So print n if it is greater than 2.



function isPrime(n: number): boolean {
    for (let i = 2; i <= n/2; i++) {
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}

function primeFactorization(n:number): number[] {
    let list = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            while (n%i === 0) {
                console.log(n);
                n = n%i;
                list.concat(i);
            }
        }
    }
    return list;
}


console.log(primeFactorization(12));