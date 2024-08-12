/* 
https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
Difficulty: Easy

A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.

*/

// Solution 1 - 20 mins (50% score)
// Detected time complexity: O(N ^ 2)
// function solution(A) {
//   // declare an empty array to store the pairs of passing car indices
//   let passingCarPairs = []
//   // for loop
//   for (let i = 0; i < A.length; i++) {
//     // if (num === 0) 
//     if (A[i] === 0) {
//       // nested loop (idx + 1)
//       for (let j = i + 1; j < A.length; j++) {
//         // if num === 1
//         if (A[j] === 1) {
//           // arr.push([i, j])
//           passingCarPairs.push([i, j])
//         }
//       }
//     }
//   }
//   // return arr
//   return passingCarPairs.length
// }

// Solution 2 (70% score) - did NOT satisfy this condition - The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000. 
// function solution(A) {
//   let zeroCount = 0
//   let pairs = 0
//   for (let num of A) {
//     num === 0 ? zeroCount++ : pairs += zeroCount
//   }
//   return pairs
// }

// Solution 3 (100% score)
function solution(A) {
  let zeroCount = 0
  let pairs = 0
  for (let num of A) {
    num === 0 ? zeroCount++ : pairs += zeroCount
    if (pairs > 1_000_000_000) {
      return -1
    }
  }
  return pairs
}

const A = [0,1,0,0,1]

console.log(solution(A));