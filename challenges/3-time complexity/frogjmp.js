/* 
https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
Difficulty: Easy

A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.

*/

//Solution 1 - 9 mins
// function solution(X, Y, D) {
//   // declare variables
//   let start = X;
//   const end = Y;
//   const jumpDist = D;
//   let count = 0;
//   // while start less than end
//   while (start < end) {
//     // increase start by jumpDist
//     start += jumpDist;
//     // add 1 to count
//     count ++
//   }
//   return count;
// }

// Solution 2
function solution(X, Y, D) {
  return Math.ceil((Y - X) / D)
}

console.log(solution(10, 85, 30));