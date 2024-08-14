/* 
https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
Difficulty: Medium

We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0


There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A);

that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].

*/

// Solution 1 > 60 mins (87% score)
function solution(A) {
  // declare startArray to store the start point of each circle
  let startArray = []
  // declare endArray to store the end point of each circle
  let endArray = []
  for (let i = 0; i < A.length; i++) {
    startArray.push(i - A[i])
    endArray.push(i + A[i])
  } 
  // sort both start and end Arrays in ascending order
  const sortedStartArray = startArray.sort((a, b) => a - b)
  const sortedEndArray = endArray.sort((a, b) => a - b)
  // declare two variables adn set 0 - openDisks and numOfIntersections 
  let openDisks = 0
  let numOfIntersections = 0
  // declare endPointer = 0
  let endPointer = 0
  // for loop to iterate through start Array e.g. 0 - 6
  for (let i = 0; i < A.length; i++) {
    // if (startNum <= EndNum && i === 0)
    if (sortedStartArray[i] <= sortedEndArray[endPointer] && i === 0) {
      // openDisks += 1
      openDisks += 1
    // else if (startNum <= EndNum && i !== 0)
    } else if (sortedStartArray[i] <= sortedEndArray[endPointer] && i !== 0) {
      // numOfIntersections += openDisks
      numOfIntersections +=openDisks
      // openDisks += 1
      openDisks += 1
    // else
    } else if (sortedStartArray[i] > sortedEndArray[endPointer] && i < A.length) {
      // endPointer += 1
      endPointer += 1;
      // openDisks -= 1
      openDisks -= 1;
      i -= 1
    }
  }
  // return numOfIntersections
  return numOfIntersections
}

// Solution 2 (100% score) - made sure to return -1 if intersection pairs exceeded 1_000_000
function solution(A) {
  // declare startArray to store the start point of each circle
  let startArray = []
  // declare endArray to store the end point of each circle
  let endArray = []
  for (let i = 0; i < A.length; i++) {
    startArray.push(i - A[i])
    endArray.push(i + A[i])
  } 
  // sort both start and end Arrays in ascending order
  const sortedStartArray = startArray.sort((a, b) => a - b)
  const sortedEndArray = endArray.sort((a, b) => a - b)
  // declare two variables adn set 0 - openDisks and numOfIntersections 
  let openDisks = 0
  let numOfIntersections = 0
  // declare endPointer = 0
  let endPointer = 0
  // for loop to iterate through start Array e.g. 0 - 6
  for (let i = 0; i < A.length; i++) {
    // if (startNum <= EndNum && i === 0)
    if (sortedStartArray[i] <= sortedEndArray[endPointer] && i === 0) {
      // openDisks += 1
      openDisks += 1
    // else if (startNum <= EndNum && i !== 0)
    } else if (sortedStartArray[i] <= sortedEndArray[endPointer] && i !== 0) {
      // numOfIntersections += openDisks
      numOfIntersections +=openDisks
      // openDisks += 1
      openDisks += 1
    // else
    } else if (sortedStartArray[i] > sortedEndArray[endPointer] && i < A.length) {
      // endPointer += 1
      endPointer += 1;
      // openDisks -= 1
      openDisks -= 1;
      i -= 1
    }
    if (numOfIntersections > 10_000_000) {
      return -1
    }
  }
  // return numOfIntersections
  return numOfIntersections
}

const A = [1,5,2,1,4,0]

console.log(solution(A));