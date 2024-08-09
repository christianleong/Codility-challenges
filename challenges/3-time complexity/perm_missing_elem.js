/* 
https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

Difficulty: Easy

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].

*/

// Solution 1
// function solution(A) {
//   if (A.length === 0) {
//     return null
//   }
//   const sortedA = A.sort((a,b) => a - b)
//   let tempNum = sortedA[0] - 1
//   for (let i = 0; i < sortedA.length; i++) {
//     if(sortedA[i] - tempNum !== 1) {
//       return sortedA[i] - 1
//     }
//     tempNum = sortedA[i]
//   }
// }

// Solution 2
function solution(A) {
  let n = A.length + 1
  let maxSumA = n * (n + 1) / 2
  let sumA = A.reduce((a,b) => a + b)
  return maxSumA - sumA
}

console.log(solution([2,3,1,5]));