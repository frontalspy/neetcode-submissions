class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map<number, number>();
        for(let i = 0; i< nums.length; i++) {
            if(frequency.has(nums[i])) {
                const freq = frequency.get(nums[i]);
                frequency.set(nums[i], freq + 1)
            } else {
                frequency.set(nums[i], 0);
            }
        }
        return [...frequency].sort((a, b) => b[1] - a[1]).map((f) => f[0]).splice(0, k);
    }
}
