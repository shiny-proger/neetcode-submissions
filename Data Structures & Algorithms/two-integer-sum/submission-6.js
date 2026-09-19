class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let num=0;
        const map = new Map();
        for(let i =0; i<nums.length; i++){
            if(nums.includes(target-nums[i]) && nums.indexOf(target-nums[i])!==i){
                    return [nums.indexOf(target-nums[i]), i]
            }
            
        }
    }
}
