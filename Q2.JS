//TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(1)
let count = 0;
function removeTargetValue(nums){
let val = 3;
//   for(let i = 0 ; i< nums.length; i++){  it affect the indices that's why we loop in reverse order.
for (let i = nums.length - 1; i >= 0; i--) {
  if (nums[i] === val) {
     nums.splice(i, 1);
     count++
  }
}
return nums
}
const result = removeTargetValue([3, 2, 2, 3,4,6,7,3,2,3,3,3,3,3]);  //
console.log('Number of element that are removed : ',count);
console.log('Modified nums array : ',result);























