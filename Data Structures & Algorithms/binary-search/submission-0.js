class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // const mp = new Map(nums.map((val, idx) => [val, idx]))
        // if(mp.has(target)){
        //     return mp.get(target)
        // } else {
        //     return -1
        // }

        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2)
            if (nums[m] > target) {
                r = m - 1
            } else if (nums[m] < target) {
                l = m + 1
            } else {
                return m
            }
        }
        return -1    
    }
}
