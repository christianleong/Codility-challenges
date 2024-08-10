/* 
https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
Difficulty: Easy

A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].

*/

// Solution 1 - 6 mins (0% score) - incorrect return
// function solution(A) {
//   if (A.length > 100000 || A.length < 3) {
//     return;
//   }

//   const sortedInt = A.sort((a, b) => a - b);
//   const idxOfLastInt = sortedInt.length - 1;
//   return idxOfLastInt * (idxOfLastInt - 1) * (idxOfLastInt - 2);
// }

// Solution 2 (44% score)
// function solution(A) {
//     if (A.length > 100000 || A.length < 3) {
//       return;
//     }

//   const sortedInt = A.sort((a, b) => a - b);
//   const idxOfLastInt = sortedInt.length - 1;
//   return Math.max(
//     sortedInt[idxOfLastInt] *
//     sortedInt[idxOfLastInt - 1] *
//     sortedInt[idxOfLastInt - 2], 
//   );
// }


// Solution 3 (100% score)
function solution(A) {
  if (A.length > 100000 || A.length < 3) {
    return;
  }

  const sortedInt = A.sort((a, b) => a - b);
  const idxOfLastInt = sortedInt.length - 1;
  return Math.max(
    sortedInt[idxOfLastInt] * sortedInt[idxOfLastInt - 1] * sortedInt[idxOfLastInt - 2], 
    sortedInt[0] * sortedInt[1] * sortedInt[idxOfLastInt]
  );
}

const A = [-5, 5, -5, 4];

console.log(solution(A));