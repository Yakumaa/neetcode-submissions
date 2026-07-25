class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // r - l + 1: Total length of the current sliding window.
    // count: How many times our target character c appears inside [l, r].
    // (r - l + 1) - count: The number of other characters in the window that need to be changed/replaced into c.
    // If the number of needed replacements exceeds k, the window is invalid.
    characterReplacement(s, k) {
        let res = 0
        let charSet = new Set(s)

        for (let c of charSet) {
            let count = 0
            let l = 0

            for (let r = 0; r < s.length; r++) {
                if (s[r] === c) {
                    count++
                }

                while (r - l + 1 - count > k) {
                    if (s[l] === c) {
                        count--
                    }
                    l++
                }

                res = Math.max(res, r - l + 1)
            }
        }
        return res
    }
}
