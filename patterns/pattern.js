//======================================== Pattern A
function patternA(n) {
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = 1; j <= n; j++) {
      temp = temp + "*";
    }
    console.log(temp);
  }
}

patternA(5);
/* OUTPUT
 *****
 *****
 *****
 *****
 *****
 */
//======================================== Pattern B

function patternB(n) {
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = 1; j <= n; j++) {
      temp = temp + i + " ";
    }
    console.log(temp);
  }
}
patternB(5);
/* OUTPUT
1 1 1 1 1 
2 2 2 2 2 
3 3 3 3 3 
4 4 4 4 4 
5 5 5 5 5 
 */
//======================================== Pattern C

function patternC(n) {
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp = temp + "* ";
    }
    console.log(temp);
  }
}
patternC(5);
/* OUTPUT
 *
 * *
 * * *
 * * * *
 * * * * *
 */
//======================================== Pattern D
function patternD(n) {
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp = temp + j + " ";
    }
    console.log(temp);
  }
}
patternD(5);
/* OUTPUT
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
 */
//======================================== Pattern E
// function patternE(n) {
//   let start = 1;
//   for (let i = 1; i <= n; i++) {
//     let val = start;
//     let temp = "";
//     for (let j = 1; j <= i; j++) {
//       temp = temp + val + " ";
//       val = val === 0 ? 1 : 0;
//     }
//     start = start === 0 ? 1 : 0;
//     console.log(temp);
//   }
// }

function patternE(n) {
  for (let i = 1; i <= n; i++) {
    let printValue = i % 2 === 0 ? 0 : 1;
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp = temp + printValue + " ";
      printValue = printValue === 0 ? 1 : 0;
    }
    console.log(temp);
  }
}
patternE(5);
/* OUTPUT
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 
 */
//======================================== Pattern F
function patternF(n) {
  let value = 1;
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp = temp + value + " ";
      value++;
    }
    console.log(temp);
  }
}
patternF(5);
/* OUTPUT
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
 */
//======================================== Pattern G
function patternG(n) {
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = n; j >= i; j--) {
      temp = temp + "* ";
    }
    console.log(temp);
  }
}
patternG(5);
/* OUTPUT
 * * * * *
 * * * *
 * * *
 * *
 *
 */
//======================================== Pattern H
function patternH(n) {
  for (let i = n; i >= 1; i--) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp = temp + i + " ";
    }
    console.log(temp);
  }
}
patternH(5);
/* OUTPUT
5 5 5 5 5 
4 4 4 4 
3 3 3 
2 2 
1 
 */
//======================================== Pattern I
function patternI(n) {
  for (let i = n; i >= 1; i--) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp = temp + j + " ";
    }
    console.log(temp);
  }
}
patternI(5);
/* OUTPUT
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
 */
//======================================== Pattern J
function patternJ(n) {
  for (let row = 1; row <= n * 2 - 1; row++) {
    let temp = "";
    let rowChange = row > n ? n * 2 - row : row;
    for (let col = 1; col <= rowChange; col++) {
      temp = temp + "* ";
    }
    console.log(temp);
  }
}
patternJ(5);
/* OUTPUT
 *
 * *
 * * *
 * * * *
 * * * * *
 * * * *
 * * *
 * *
 *
 */
//======================================== Pattern K
// function patternK(n) {
//   for (let row = 1; row <= n; row++) {
//     let temp = "";

//     for (let col = 1; col <= n; col++) {
//       let value = row + col > n ? "*" : " ";
//       temp = temp + value + " ";
//     }
//     console.log(temp);
//   }
// }
// patternK(5);

//-----OR----------

function patternK(n) {
  for (let row = 1; row <= n; row++) {
    let temp = "";

    for (let space = 1; space <= n - row; space++) {
      temp = temp + " ";
    }
    for (let star = 1; star <= row; star++) {
      temp = temp + "*";
    }
    console.log(temp);
  }
}
patternK(5);
/* OUTPUT
--------* 
------* * 
----* * * 
--* * * * 
* * * * * 
 */
