class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newMap = new Set(nums);
        if (newMap.size < nums.length){
            return true
        }
        return false;
    }
}
