/* 
https://app.codility.com/programmers/lessons/8-leader/equi_leader/
Difficulty: Easy

A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].

*/

// Solution 1 - 66 mins (55% score)
// function solution(A) {
//     /* Step 1: find the leader */
//     // declare the variables - size, value
//     let size = 0
//     let value
//     // for loop to iterate through A array
//     for (let num of A) {
//         // if size is 0
//         if (size === 0) {
//             // value is currNum
//             value = num
//             // size increases by 1
//             size += 1
//         // else if num does equal value
//         } else if (value !== num) {
//             // size decreases by 1
//             size -= 1
//         // else if num equals value
//         } else if (value === num) {
//             // size increases by 1
//             size += 1
//         }
//     }

//     let count = 0
//     // for loop to iterate through A array
//     for (let num of A) {
//         // if currNum is value
//         if (num === value) {
//             // count += 1
//             count += 1
//         }
//     }
    
//     let leader
//     // if count > Math.floor(A.length / 2)
//     if (count > Math.floor(A.length / 2)) {
//         // then leader is value
//         leader = value
//     }   

//     let left
//     let right
//     let numOfEquiLeaders = 0
//     let leftLeaderCount
//     let rightLeaderCount
//     // for loop to iterate through the array and slice and different parts
//     for (let i = 1; i < A.length; i++) {
//         left = A.slice(0, i)
//         right = A.slice(i, A.length + 1)
//         leftLeaderCount = left.filter(x => x === leader).length; 
//         rightLeaderCount = right.filter(x => x === leader).length; 
//         if (leftLeaderCount > Math.floor(left.length / 2) && rightLeaderCount > Math.floor(right.length / 2)) {
//             numOfEquiLeaders += 1
//         }
//     }
//     return numOfEquiLeaders
// }

// Solution 2 - solution from Stack Overflow
function solution(A) {
    const dic = {};
    let equileader = 0;
    let leaderCount = 0;
    let leader;

    // First pass: find the leader and its count
    for (let i = 0; i < A.length; i++) {
        const value = A[i]
        if (dic[value]) {
            dic[value] += 1
        } else {
            dic[value] = 1
        }
        if (dic[value] > leaderCount) {
            leaderCount = dic[value]
            leader = value
        }
    }

    // If the leader does not appear more than half the time, return 0
    if (leaderCount < Math.floor(A.length / 2)) {
        return 0
    }

    // Second pass: count the equi leaders
    let left = 0
    let right = leaderCount
    for (let ix = 0; ix < A.length; ix++) {
      if (A[ix] === leader) {
        left += 1;
        right -= 1;
      }
      if (left > (ix + 1) / 2 && right > (A.length - ix - 1) / 2) {
        equileader += 1;
      }
    }

    return equileader;

}

const A = [4,3,4,4,4,2]

console.log(solution(A));