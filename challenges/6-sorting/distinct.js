/* 
https://app.codility.com/programmers/lessons/6-sorting/distinct/
Difficulty: Easy

Write a function

function solution(A);

that, given an array A consisting of N integers, returns the number of distinct values in array A.

For example, given array A consisting of six elements such that:

 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

// Solution 1 - 5 mins (100% score) - O(N*log(N)) or O(N)
// function solution(A) {
//   let intSets = new Set()
//   // loop through array
//   for (let num of A) {
//     // store the num and set count as 1
//     intSets.add(num)
//   }
//   // return length of intSets
//   return intSets.size
// }

// Solution 2 (100% score) - using object instead
function solution(A) {
  let intSets = {}
  // loop through array
  for (let num of A) {
    if (num in intSets) {
      intSets[num] += 1
    } else {
      // store the num and set count as 1
      intSets[num] = 1
    }
  }
  // return length of intSets
  return Object.keys(intSets).length
}

const A = [2,1,1,2,3,1]

console.log(solution(A));