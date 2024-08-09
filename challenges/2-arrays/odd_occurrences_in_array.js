/* 
https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

Difficulty: Easy

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.

*/

// Solution 1
// function solution(input) {
//   let obj = {}
//   // iterate through sortedArr 
//   for (const num of input) {
//   // if currentNum is in obj then add one to count
//     if (num in obj) {
//       obj[num] += 1
//     // else store into obj with the count
//     } else {
//       obj[num] = 1
//     }
//   } 
//   // return the obj key with count 1
//   for (const key in obj) {
//     if (obj[key] === 1) {
//       return Number(key)
//     }
//   }
// }

// Solution 2
// https://rehmat-sayany.medium.com/using-map-over-objects-in-javascript-a-performance-benchmark-ff2f351851ed
/* 
Maps vs Objects

Maps:
- keys can be any data type, including objects, functions and primitive values
- order of elements is based on the order of insertion
- more efficient for additions and deletions

Objects:
- keys can only be strings
- no guaranteed order
- efficient for static data

key takeaways:
- For smaller data sizes, the performance difference between Maps and Objects is minimal.
- As the data size grows, Maps consistently outperforms Objects in insertion, update, and deletion operations.
- Maps are particularly advantageous when dealing with large datasets that require frequent changes.

*/


function solution(input) {
  if (input.length === 0) {
    return null
  }

  const countMap = new Map

  for (const num of input) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }

  for (const num of input) {
    if (countMap.get(num) === 1) {
      return num
    }
  }

}

const input = [9, 3, 9, 3, 9, 7, 9];

console.log(solution(input))