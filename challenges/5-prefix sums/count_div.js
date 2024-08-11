/* 
https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
Difficulty: Medium

Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.

*/

// Solution 1 - 7 mins (50% score) - this solution is inefficient if B is a large num
// function solution(A, B, K) {
//   // set numOfDivisibleByK = 0
//   let numOfDivisibleByK = 0
//   // for loop starting from 6 and ending at 11
//   for (let int = A; int <= B; int++) {
//     // if i % K === 0
//     if (int % K === 0) { 
//       // numOfDivisibleByK += 1
//       numOfDivisibleByK += 1
//     }
//   }
//   // return numOfDivisibleByK
//   return numOfDivisibleByK
// }

// Solution 2 (25% score)
// function solution(A, B, K) {
//   return Math.ceil((B - A) / K);
// }

// Solution 3 (37% score)
// function solution(A, B, K) {
//   let count = Math.floor(B/K) - (A/K)
//   if (A % K === 0) {
//     count ++
//   }
//   return count
// }

// Solution 4 (100% score)
function solution(A, B, K) {
  let count = parseInt(B / K) - parseInt(A / K)
  if (A % K === 0) {
    count++;
  }
  return count;
}

console.log(solution(6, 11, 2));