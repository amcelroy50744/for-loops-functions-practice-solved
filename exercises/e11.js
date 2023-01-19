// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
let getAllWithdrawals = [];
for (let index = 0; index < array.length; index++) {
  let totalAddTogether = 0;
  for (let withdrawals in array[index].withdrawals) {
    totalAddTogether += array[index].withdrawals[withdrawals]
  }
  getAllWithdrawals.push(totalAddTogether);
}
return getAllWithdrawals;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
