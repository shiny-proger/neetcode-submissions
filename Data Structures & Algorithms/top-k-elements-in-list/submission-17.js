class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const setN = new Set(nums);
        const mapN = new Map();

        for (let i=0;i<nums.length;i++){
            mapN.set(nums[i], (mapN.get(nums[i]) || 0)+1);
        }
        const sortMap = new Map(
            [...mapN].sort((a, b) => a[1] - b[1])
        );
        const ok = [...sortMap.keys()]
        const arr = ok.splice(-k)
        return arr;
    }
}
