
// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code

export function doesArrayInclude(array, value) {
  // Your code goes here...
let doesArrayInclude = []
for (let index = 0; index < array.length; index++) {
if (array[index].toLowerCase() === value.toLowerCase()){
  doesArrayInclude.push(array[index])
}
}
if(doesArrayInclude.length > 0){
  return true;
}else return false;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function