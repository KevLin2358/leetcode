class Solution:
    def countBits(self, n: int) -> List[int]:
        result = []

        for idx in range(n + 1):
            count = 0
            quotient = idx
            while quotient > 0:
                remainder = quotient % 2
                if remainder == 1:
                    count += 1
                quotient = quotient // 2
            result.append(count)

        return result