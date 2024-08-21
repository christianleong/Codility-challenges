/* 
https://app.codility.com/programmers/lessons/8-leader/dominator/
Difficulty: Easy

An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

For example, consider array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

Write a function

function solution(A);

that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

For example, given array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
the function may return 0, 2, 4, 6 or 7, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

*/

// Solution 1 - can't use sort() and toSorted()
// function solution(A) {
//     // declare an empty array to store the stack
//     let stack = []
//     const sortedA = A.toSorted()
//     console.log(sortedA);
//     // for loop to iterate through the array
//     for (let currNum of sortedA) {
//         // if num equals last num in array
//         if (stack.length > 0 && currNum === stack[stack.length - 1]) {
//             // push num into array
//             stack.push(currNum)
//         // if num does not equal last num in array
//         } else if (stack.length > 0 && currNum !== stack[stack.length - 1]) {
//             // remove last num from array
//             stack.pop()
//         // if i is 0
//         } else if (stack.length === 0) {
//             // push num into array
//             stack.push(currNum);
//         }
//     }
//     const dominator = stack[0]
//     let idxArray = []
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] === dominator) {
//             idxArray.push(i)
//         }
//     }
//     return idxArray
// }

// Solution 2 - 30mins (83% score)
function solution(A) {
    // declare size = 0 which will change to keep track of the value
    let size = 0
    // declare value to keep of leader
    let value
    // for loop - A
    for (let num of A) {
        // if (size === 0)
        if (size === 0) {
            // value = A[i]
            value = num
            // increase size by 1
            size++
        // if (size > 0 && currNum does not equal to value)
        } else if (size > 0 && num !== value) {
            // reduce size by 1
            size--
        // if (size > 0 && currNum equals to value)
        } else if (size > 0 && num === value) {
            // increase size by 1
            size++
        }
    }
    
    let leader
    // check if size > 0
    if (size > 0) {
        // candidate equals value
        leader = value
    // else 
    } else {
        // return -1
        return -1
    }

    let result = []
    // for loop - A
    for (let i = 0; i < A.length; i++) {
        // if currNum equals to candidate
        if (A[i] === leader) {
            // push idx to empty array
            return i
        }
    }
}

// Solution 3 (100% score) 
// key takeaway about finding the leader is to find the number that is present more than half of the elements, not just the majority. So in this case, the number 1s in the array would not be consider the leader.
function solution(A) {
    let size = 0
    let value

    // Step 1: Find the candidate for the leader
    for (let num of A) {
        if (size === 0) {
            value = num
            size++
        } else if (num !== value) {
            size--
        } else if (num === value) {
            size++
        }
    }
    
    // Step 2: Verify if the candidate is indeed the leader
    let count = 0;
    let leader
    for (let num of A) {
        if (num === value) {
            count++
        }
    }

    // if the count is more than half of the array size, set leader
    if (count > Math.floor(A.length / 2)) {
        leader = value
    } else {
        return -1
    }

    // Step 3: Return the index of the first occurreance of the leader
    for (let i = 0; i < A.length; i++) {
        if (A[i] === leader) {
            return i
        }
    }
    return -1
}

const A = [2, 1, 1, 3, 4];

console.log(solution(A));