<aside>
💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

</aside>
//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BRUTE FORCE APPROACH
// TIME COMPLIXITY → O(n^2)
// SPACE COMPLIXITY → O(1)

let nums1 = [2,7,11,15]
let target1 = 9;
for(let i=0; i<nums1.length; i++){
    for(let j=i+1; j<nums1.length; j++){
        if( nums1[i] + nums1[j] === target1){
            // console.log([i,j]);
        }
    }
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//OPTIMIZATION
// ASUMMING ARRAY IS NOT SORTED
// TIME COMPLIXITY → O(n log n) due to sorting 
// SPACE COMPLIXITY → O(1)
let num2 = [2,7,1,15,3,4,5,-2,6,8,0,9,11]
 let target2 = 9;
  num2.sort((a,b) => a-b);
//   console.log(num2);

  let left = 0;
  let right = num2.length -1;
   while(right > left){
     let sum = num2[left] + num2[right]
    if(sum === target2){
        // console.log([left,right])
    left++;
    right--;
    }
    else if(sum > target2){
        right--;
    }else{
        left++;
    }   
   }    
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// OPTIMIZATION 
// ASUMMING ARRAY IS SORTED
// TIME COMPLIXITY → O(n)
// SPACE COMPLIXITY → O(1)


function findallTargetPair (arr){

    let i = 0;
    let j = arr.length-1;
    let target = 9;
     
    while(j>i){
       let  sum = arr[i] + arr[j]
       if(sum === target){
       return [i,j];
       
       }else if(sum > target){
        j--;
       }else{
        i++;
       }
    }
    
}
 const output = findallTargetPair([2,7,11,15])
 console.log(output);



