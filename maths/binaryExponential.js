//======================================= O(n)
function binaryExpo(base, power) {
  let answer = 1;
  for (i = 1; i <= power; i++) {
    answer = answer * base;
  }

  return answer;
}

console.log(binaryExpo(2, 10));

//========================================O(log n)

function binaryExponential(base, power) {
  let answer = 1;
  while (power > 0) {
    if (power % 2 !== 0) {
      answer = answer * base;
    }
    base = base * base;
    power = Math.floor(power / 2);
  }

  return answer;
}

console.log(binaryExponential(2, 11));
