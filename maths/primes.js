// Check if the value is prime or not - Brute force
//================================================================

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(12));

// Check if the value is prime or not - slight optimized
//================================================================

function isPrime1(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Check if the value is prime or not - Much optimized - skip all even because it can be divide by 2
//================================================================

function isPrime2(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Check if the value is prime or not - full optimized -  competitive programming
//================================================================

function isPrime6k(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i <= Math.sqrt(n); i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
