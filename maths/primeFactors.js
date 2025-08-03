// return all unique prime factors - Brute force
//================================================================

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (i = 5; i * i <= n; i++) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function primeFactors(n) {
  const primeFactorsSet = new Set();
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      if (isPrime(i)) primeFactorsSet.add(i);
    }
  }

  return primeFactorsSet;
}

console.log(primeFactors(60));

// return all unique prime factors - slightly optimized
//================================================================

function primeFactors1(n) {
  const primeFactorsSet = new Set();
  for (i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      if (isPrime(i)) {
        primeFactorsSet.add(i);

        if (i * i !== n && isPrime(n / i)) {
          primeFactorsSet.add(n / i);
        }
      }
    }
  }
  if (n > 1) primeFactorsSet.add(n);

  return primeFactorsSet;
}

console.log(primeFactors1(13));

// return all unique prime factors - optimized
//================================================================

function primeFactors2(n) {
  const primeFactorsSet = new Set();
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) primeFactorsSet.add(i);

    while (n % i === 0) {
      n = n / i;
    }
  }
  if (n > 1) primeFactorsSet.add(n);

  return primeFactorsSet;
}

console.log(primeFactors2(783));
