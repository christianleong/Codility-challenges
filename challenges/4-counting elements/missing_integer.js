/* 
https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
Difficulty: Medium

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

// Solution 1 - 17 mins (100% score) 
// Time complexity: O(N) or O(N * log(N))

// function solution(A) {
//   // set default missingInt = 1
//   let missingInt = 1
//   // if max value in array is less than 1 or min value more than 1
//   if (Math.max(...A) < 1 || Math.min(...A) > 1) {
//     // return missingInt
//     return missingInt
//   }
//   // sort array in ascending order [1,1,2,3,4,6]
//   const sortedA = A.sort((a, b) => a - b)
//   // for loop
//   for (const num of sortedA) {
//     // if (currentNum equals to missingInt)
//     if (num === missingInt) {
//       // update missingInt + 1
//       missingInt += 1
//     }
//   }
//   // return missingInt
//   return missingInt
// }

function solution(A) {
  let missingInt = 1;
  if (Math.max(...A) < 1 || Math.min(...A) > 1) {
    return missingInt;
  }
  const sortedA = A.sort((a, b) => a - b);
  for (const num of sortedA) {
    if (num === missingInt) {
      missingInt += 1;
    }
  }
  return missingInt;
}

const A = [1, 3, 6, 4, 1, 2];

console.log(solution(A));