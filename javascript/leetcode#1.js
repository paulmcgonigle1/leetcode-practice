// Two Sum (LeetCode #1)
// Given an array of integers and a target sum, 
// return the indices of the two numbers that add up to the target.


function twoSum(nums, target) {
    for (let i = 0; i<nums.length; i++){
        for (let j = i+1;j<nums.length; j++ ){
            if(nums[i] + nums[j] == target){
                return[i,j];//found the solution
            }
        }
    }
    return []//no solution found

}

console.log(twoSum([5,7,4,6], 10))