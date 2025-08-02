function charFrequency(str) {
  const resultObj = {};
  for (let char of str) {
    resultObj[char] = resultObj[char] ? resultObj[char] + 1 : 1;
    // resultObj[char] = (resultObj[char] || 0) + 1;
  }
  return resultObj;
}

console.log(charFrequency("AACCbBDd"));

//=============================================================================

// Count of digits in the given number

const n = 123454321;
const str = n + "";
console.log(str.length);

function countDigits(n) {
  let count = 0;

  while (n > 1) {
    count++;
    n = n / 10;
  }

  return count;
}
console.log(countDigits(n));

//=============================================================================

// Reverse the given number

const num = 1234567890;
const numStr = num + "";
const reverse = numStr.split("").reverse().join("");
console.log(+reverse);

function reverseNumber(n) {
  let output = 0;
  while (n >= 1) {
    let curr = n % 10;
    output = output * 10;
    output = output + curr;
    n = Math.floor(n / 10);
  }
  return output;
}

console.log(reverseNumber(num));
