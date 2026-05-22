class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hasSeen = new Set<number>();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const needed = target - num;
            if (hasSeen.has(needed)) {
                return [nums.indexOf(needed), i];
            }
            hasSeen.add(num);
        }
        return [];
    }
}
