/* 
https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
Difficulty: Easy

A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S is made only of the characters '(' and/or ')'.

*/

// Solution 1 - 10 mins (100% score)
function solution(S) {
    // declare empty stack array to store "(" or ")"
    let stack = []
    // for loop to iterate through S string
    for (let char of S) {
        // if "("
        if (char === "(") {
            // push into stack
            stack.push("(")
        } else if (char === ")" && stack.length === 0) {
        // if ")"
            stack.push(")");
        } else if (char === ")") {
            // pop out of stack
            stack.pop()
        }
    }
    // if stack is empty return 1
    if (stack.length === 0) {
        return 1
    }
    // return 0
    return 0
}

const S = "(()(())())"

console.log(solution(S));