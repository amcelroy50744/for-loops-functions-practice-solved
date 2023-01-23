
// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
  // Your code goes here...
let arraytoSplice = [];
let joinToString = '';
for(let index = 0; index < array.length; index++){
  arraytoSplice.push(array[index])
}
for(let index = 1; index < arraytoSplice.length -1; index+=2){
  arraytoSplice.splice(index,0,separator)
}
for(let x of arraytoSplice){
  joinToString += x
}
return joinToString
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
