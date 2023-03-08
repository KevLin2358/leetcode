class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        current = nums[0]

        for idx in range(1, len(nums)):
            current = current ^ nums[idx]

        return current