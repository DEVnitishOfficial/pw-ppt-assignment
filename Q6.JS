
// 💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]
// Output: true


// BRUTE FORCE APPROACH
// TIME COMPLEXITY O(n^2)
// SPACE COMPLEXITY O(n^2)
let nums = [1, 2, 3, 3];
let checkDuplicate = false;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
        checkDuplicate = true;
      break;
    }
  }
}
// console.log(checkDuplicate);  

// OPTIMIZATION
// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(n)

function checkDuplicateNums(nums1) {
    const frequency = {};

    for (let i = 0; i < nums1.length; i++) {
      const num = nums1[i];
      if (frequency[num]) { 
        return true;
      }
      frequency[num] = true;
      // console.log(frequency)  
    }
    return false;
  }
  const nums1 = [1, 2, 3, 1 ];  //[1, 2,1, 3,4 ]
  console.log(checkDuplicateNums(nums1));
  
