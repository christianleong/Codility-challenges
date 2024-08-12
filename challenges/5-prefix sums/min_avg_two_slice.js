/* 
https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
Difficulty: Medium

A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

A = [4,2,2,5,1,5,8]

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].

*/

/* 
IGNORE THIS, I WAS JUST TESTING OUT
Efficiency: It avoids unnecessary operations (splice and an extra loop iteration).
Clarity: It's simpler and more straightforward, making it easier to read and maintain.
Correctness: It directly produces the correct prefix sum array without the need to adjust it afterward.
*/
// function prefixSums(A) {
//     let len = A.length
//     let P = new Array(len).fill(0)
//     for (let i = 1; i <= A.length; i++) {
//         P[i] = P[i - 1] + A[i - 1]
//     }
//     P.splice(0, 1)
//     return P
// }

// function prefixSums(A) {
//   let len = A.length;
//   let P = new Array(len).fill(0);
//   P[0] = A[0]
//   for (let i = 1; i < A.length; i++) {
//     P[i] = P[i - 1] + A[i];
//   }
//   return P;
// }

// Solution 1 - 1hr (100% score)
// This video explains the problem and solution well - https://www.youtube.com/watch?v=Xu_hTjFAauk&t=443s
function solution(A) {
    // declare startIdx to store start of slice
    let startIdx
    // declare minAvg to store current minAvg
    let minAvg = Infinity
    // for loop to iterate through the A array except the last two integers
    for (let i = 0; i < A.length - 2; i++) {
        // we are only checking the average of 2 and 3 nums because they always have a smaller average than 4 nums
        // avg of 3 nums
        let avg1 = (A[i] + A[i + 1] + A[i + 2]) / 3
        // avg of 2 nums
        let avg2 = (A[i] + A[i + 1]) / 2;
        // if avg of 3 nums < minAvg OR avg of 2 nums < minAvg
        if (avg1 < minAvg || avg2 < minAvg) {
            // then minAvg = min of (avg of 3 nums, avg of 2 nums) - replacing and storing the lowest minAvg\
            minAvg = Math.min(avg1, avg2)
            // also store the startIdx = i
            startIdx = i
        }
    }
    
    // finally, we will still check the last two integers
    // if avg of last 2 nums < minAvg
    if ((A[A.length - 2] + A[A.length - 1]) / 2 < minAvg) {
        // then startIdx = A.length - 2
        startIdx = A.length - 2
    }
    return startIdx
}

const A = [4, 2, 2, 5, 1, 5, 8];

console.log(solution(A));