

// BRUTE FOREC APPROACH
// TIME COMPLEXITY O(n^2)
// SPACE COMPLEXITY O(1)
let nums = [1,2,2,4];
for(let i=0; i<nums.length; i++){
   for(let j=i+1; j<nums.length; j++){
    if(nums[i] == nums[j]){
        nums[j] += 1;
        // console.log([nums[i], nums[j]])
    }
   }
}
// console.log(nums);


// OPTIMIZED
// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(n) if  not found any duplicates it will run n times

function findDuplicateAndMissingNums(nums){
    let count = {}
    let missing;
    let duplicate;

    for(let num of nums){
        if(count[num]){
            duplicate = num;
        }else{
            count[num] = 1
        }
    }
    for(let i=1; i<=nums.length; i++){
        if(!count[i]){
            missing = i;
            break;
        }
    }
    return [duplicate, missing];
}

const results = findDuplicateAndMissingNums([ 1,2,2,4])
console.log(results);
  
