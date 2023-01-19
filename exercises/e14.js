
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
let getClientsWithWrongBalance = [];
for (let index = 0; index < array.length; index ++) {
  let deposits = 0;
  let withdrawals = 0;
  for(let deposit in array[index].deposits) {
    deposits += array[index].deposits[deposit]
  }
  for (let withdrawal in array[index].withdrawals) {
    withdrawals += array[index].withdrawals[withdrawal]
  }
  if ( deposits - withdrawals != array[index].balance) {
    getClientsWithWrongBalance.push(array[index])
  }
}
return getClientsWithWrongBalance
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
