/* 
https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
Difficulty: Easy

A non-empty array A consisting of N integers is given.

A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.

The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].

For example, array A such that:

    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
contains the following example double slices:

double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
double slice (3, 4, 5), sum is 0.
The goal is to find the maximal sum of any double slice.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the maximal sum of any double slice.

For example, given:

    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
the function should return 17, because no double slice of array A has a sum of greater than 17.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−10,000..10,000].

*/

// Solution 1 - 62 mins (92% score)
// function solution(A) {
//     // declare LR array, RL array and maxDoubleSliceSum
//     let lr = [], rl = [], maxDoubleSliceSum = 0, leftSum = 0, rightSum = 0
//     // for loop starting from 1 and ending A.length - 1
//     for (let i = 1; i < A.length - 1; i++) {
//         leftSum = Math.max(0, A[i] + leftSum)
//         rightSum = Math.max(0, A[A.length - 1 - i] + rightSum)
//         lr.push(leftSum)
//         rl.push(rightSum)
//     }
//     rl.reverse().push(0)
//     for (let j = 0; j < lr.length - 1; j++) {
//         maxDoubleSliceSum = Math.max(maxDoubleSliceSum, lr[j] + rl[j + 2])
//     }
//     return maxDoubleSliceSum
// }

// Solution 2 (100% score)
function solution(A) {
    // the first and last elems of lr and rl are ignored
    let n = A.length
    let lr = new Array(n).fill(0)
    let rl = new Array(n).fill(0)
    let maxDoubleSliceSum = 0

    // populate the array starting from index 1 with the cummulated sum
    for (let i = 1; i < n - 1; i++) {
        lr[i] = Math.max(0, A[i] + lr[i - 1])
    }

    // populate the array starting from the second last index and from the sexond last index of A array as well
    for (let i = n - 2; i > 0; i--) {
        rl[i] = Math.max(0, A[i] + rl[i + 1])
    }

    for (let i = 1; i < n - 1; i++) {
        maxDoubleSliceSum = Math.max(maxDoubleSliceSum, lr[i - 1] + rl[i + 1])
    }
    return maxDoubleSliceSum
}

// const A = [3, 2, 6, -1, 4, 5, -1, 2]
const A = [6, 1, 5, 6, 4, 2, 9, 4]; // 26 because exclude elem 1 [5, 6, 4, 2, 9]

console.log(solution(A));