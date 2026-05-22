class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const first = s.split("").sort().join();
        const second = t.split("").sort().join();
        return first === second;
    }
}
