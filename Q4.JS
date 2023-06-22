
// BRUTE FORCE APPROACH
// TIME COMPLEXITY →  O(n + k) n→digit in input array,   k→ number of digits in the incremented integer
// SPACE COMPLEXITY →  O(n + k) n→space required for the integer     k→space required for the output array.
function increaseIntegerArray(digits){
    let integer = parseInt(digits.join(''));
     let intadd = integer + 1;
    const  output =  [...String(intadd)].map(Number);
    return output;
}
const result = increaseIntegerArray([1,2,3]);
// console.log(result);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// OPTIMIZATION
// TIME COMPLEXITY → O(n)
// SPACE COMPLEXITY → O(1)
function increaseIntegerArrayByOne (digitArr){
    let carry = 1;
    for(let i= digitArr.length -1; i >=0; i-- && carry>0){
        let sum = digitArr[i] + carry;
        digitArr[i] = sum % 10; // using modulo to get the last digit
         carry = Math.floor(sum/10) // dividing sum by 10 to get the carry 
    }
    return digitArr;  
}
 const results = increaseIntegerArrayByOne([1,2,3])
 console.log(results);

function plusOne(digits) {
    let carry = 1;
    
    for (let i = digits.length - 1; i >= 0; i-- && carry > 0) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        console.log('digit is',digits[i]);
        carry = Math.floor(sum / 10);
        console.log('carry is',carry);
    }
    
    if (carry > 0) {
        digits.unshift(carry);
    }
    
    return digits;
}
// let digits = [1, 2, 3,4,9];
// let result = plusOne(digits);
// console.log(result);  // Output: [1, 2, 4]

