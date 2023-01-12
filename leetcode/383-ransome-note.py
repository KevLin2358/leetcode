class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magazine_char_count = {}

        for char in magazine:
            if char not in magazine_char_count:
                magazine_char_count[char] = 1
            else:
                magazine_char_count[char] += 1

        for char in ransomNote:
            if char in magazine_char_count and magazine_char_count[char] > 0:
                magazine_char_count[char] -= 1
            else:
                return False

        return True