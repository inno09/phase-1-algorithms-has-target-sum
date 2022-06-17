function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    for  (let a = i+1; a <array.length; a++) {
      let num = target - array[i]
      // n * n steps (nested loop!)
      if (num === array[a] ) {
        return true
      
      }
        
      }
       

    }
    return false;
    // 1 step
}
  

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/ 
  // for loop to go through the array
  // for loop to find a matching number the sum ot which equals to the target
  // return true if such a pair is found
  // return false if none is found
/*
  Add written explanation of your solution here
*/
// define the function
// loop through the array 
// loop through the array while adding
// return true if two elements in the array are equal to the target


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
