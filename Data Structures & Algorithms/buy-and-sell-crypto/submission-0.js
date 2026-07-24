class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let b = 0, s = 1
        let maxP = 0

        while (s < prices.length) {
            if (prices[b] < prices[s]) {
                let profit = prices[s] - prices[b]
                maxP = Math.max(maxP, profit)
            } else {
                b = s
            }
            s++
        }
        return maxP
    }
}
