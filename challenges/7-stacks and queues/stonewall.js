/* 
https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
Difficulty: Easy

You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

Write a function:

function solution(H);

that, given an array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.

For example, given array H containing N = 9 integers:

  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8
the function should return 7. The figure shows one possible arrangement of seven blocks.



Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array H is an integer within the range [1..1,000,000,000].

*/

// Solution 1 - 88 mins (42% score) - with help from youtube
// function solution(H) {
//     // declare variables
//     let lastMinHeight = 0
//     let count = 0
//     let stack = []
//     // for loop to iterate through H array
//     for (let i = 0; i < H.length; i++) {
//         // if curr level > lastMin
//         if (H[i] > lastMinHeight) {
//             // add count
//             count++
//             // push curr level to stack
//             stack.push(H[i])
//             lastMinHeight = H[i]
//         // else if (curr level < lastMin)
//         } else if (H[i] < lastMinHeight) {
//             // while (stack is not empty && curr level < stack[last elem])
//             while(stack.length > 0 && H[i] < stack[stack.length - 1]) {
//                 // pop last elem from stack
//                 stack.pop()
//                 // if (curr level does not equal last num)
//                 if (stack.length === 0 || H[i] !== stack[stack.length - 1]) {
//                     // add count
//                     count++
//                     // push curr level to stack
//                     stack.push(H[i])
//                     lastMinHeight = H[i];
//                 }
//             }
//         }
//     }
//     return count
// }

// Solution 2 (100% score) with help from chatgpt
function solution(H) {
    let stack = []
    let count = 0

    for (let height of H) {
        // while stack is not empty and current height < last stack elem
        while (stack.length > 0 && height < stack[stack.length - 1]) {
            // stack pop
            stack.pop()
        }
        // if stack is empty OR current height > last stack elem
        if (stack.length === 0 || height > stack[stack.length - 1]) {
            // push height to stack
            stack.push(height)
            // add count
            count ++
        }
    }
    return count
}

const H = [2, 5, 1, 4, 6, 7, 9, 10, 1];

console.log(solution(H));