/* 
https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
Difficulty: Easy

A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S is made only of the following characters: '(', '{', '[', ']', '}' and/or ')'.

*/

// Solution 1 >60 mins (87% score)
function solution(S) {
  // case 1 - S is empty
  if (S.length === 0) {
    return 1
  }

  // case 2 & 3
  const char = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  // declare a variable to store the closing brackets
  let result = []
  // iterate through the S string
  for (let i = 0; i < S.length; i++) {
    // if currChar is opening ch
    if (!(S[i] in char)) {
      const currChar = S[i]
      switch (currChar) {
        case '{':
          result.push('}')
          break;
        case '[':
          result.push(']')
          break;
        case '(':
          result.push(')')
          break;
      }
    } else if (result[result.length - 1] === S[i]) {
      result.pop()
    }
  }
  if (result.length === 0) {
    return 1
  }
  return 0
}

const S = "{[()()]}";

console.log(solution(S));