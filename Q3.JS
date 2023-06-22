// DIVIDE AND CONQUER METHOD
// TIME COMPLEXITY ===> O(log n)  logarithmic time complexity.
// SPACE COMPLEXITY ===> O(1);
function findTarget(nums,target){
  let minIndex = 0;
  let maxIndex = nums.length -1;

  while(minIndex <= maxIndex){
    let midIndex = Math.round((minIndex + maxIndex)/2);
    if(nums[midIndex] <  target){
        minIndex = midIndex + 1;   
    }else if(nums[midIndex] > target){
        maxIndex = midIndex - 1;
    }else{
        return midIndex;
    }
  }
  return -1;
}
 const output = findTarget([1,3,5,6],5);
 console.log(output);