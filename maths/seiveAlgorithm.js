// Print all primes between 1 to n
//============================================

function allPrimes(n) {
  const primes = new Array(n + 1).fill(true);
  const allPrimes = [];
  primes[0] = false;
  primes[1] = false;

  for (i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (j = i * i; j <= n; j = j + i) {
        primes[j] = false;
      }
    }
  }

  for (let i = 0; i <= primes.length; i++) {
    if (primes[i]) allPrimes.push(i);
  }

  return allPrimes;
}

console.log(allPrimes(10000000));
