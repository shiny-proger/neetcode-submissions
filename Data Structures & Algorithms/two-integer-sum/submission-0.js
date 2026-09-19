class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let num=0;
        for(let i=0;i<nums.length;i++){
            num=nums[i];
            for(let j=0;j<nums.length;j++){
                if(num+nums[j]===target && i!==j){
                    return [i, j]
                }
            }   
        }
    }
}
