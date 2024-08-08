/* 
https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

Key takeaways:
1. Convert decimal to binary using Number(N).toString(2)
2. the value outside the range of an array is undefined.
3. Try to consider 

*/
// function solution(N) {
//   // convert N to binary and store in a variable
//   let binNum = Number(N).toString(2)
//   // set count variable = 0
//   let totalCount = 0
//   // split the binary variable separating number by the ones and store in an array
//   let zerosArray = binNum.split('1')
//   // iterate through 
//   for (let item of zerosArray) {
//     // count number of zeros and if currentCount greater than count, then replace count
//     if (item.length > totalCount) {
//       totalCount = item.length
//     }
//   }
//   return totalCount
// }

function solution(N) {
  // declare variable totalCount
  let totalCount = 0;
  // convert number of binary
  const binNumber = Number(N).toString(2);
  // split the binary, separating by the ones
  const binArray = binNumber.split("1");
  // iterate through using for loop
  for (let i = 0; i < binArray.length; i++) {
    // count the length and if it is greater than totalCount, then update
    if (binArray[i].length > totalCount && binArray[i + 1] !== undefined) {
      totalCount = binArray[i].length;
    }
  }
  return totalCount;
}


console.log(solution(529));