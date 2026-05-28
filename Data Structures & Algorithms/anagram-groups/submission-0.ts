class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let anagrams = new Map();
        for(let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split("").sort().join();
            if(anagrams.has(sorted)) {
                const anagramGroup = anagrams.get(sorted);
                anagrams.set(sorted, [...anagramGroup, strs[i]]);
            } else {
                anagrams.set(sorted, [strs[i]]);
            }
        }
        return [...anagrams.values()];
    }
}
