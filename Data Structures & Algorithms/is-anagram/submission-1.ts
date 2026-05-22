class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // const first = s.split("").sort().join();
        // const second = t.split("").sort().join();
        // return first === second;
        const map = new Map<string, number>();
        const first = s.split("");
        const second = t.split("");
        first.forEach((s) => {
            if(map.has(s)) {
                const occur = map.get(s) ?? 0;
                map.set(s, occur + 1)
            } else {
                map.set(s, 1)
            }
        });
        for(let i = 0; i < second.length; i++) {
            if(map.has(second[i])) {
                const occur = map.get(second[i]);
                map.set(second[i], occur - 1);
            } else {
                return false;
            }
        }
        return [...map].filter(([,m]) => m > 0).length === 0;
    }
}
