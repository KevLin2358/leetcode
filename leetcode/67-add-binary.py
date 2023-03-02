class Solution:
    def addBinary(self, a: str, b: str) -> str:
        a_int_arr = [int(char) for char in a[::-1]]
        b_int_arr = [int(char) for char in b[::-1]]

        idx = 0
        carry_over = 0
        result = []

        while idx < len(a) or idx < len(b) or carry_over == 1:
            a_num = 0
            b_num = 0
            if idx < len(a):
                a_num = a_int_arr[idx]
            if idx < len(b):
                b_num = b_int_arr[idx]

            sum = carry_over + a_num + b_num
            carry_over = 0

            if sum == 0:
                result.append("0")
            if sum == 1:
                result.append("1")
            if sum == 2:
                result.append("0")
                carry_over = 1
            if sum == 3:
                result.append("1")
                carry_over = 1

            idx += 1


        return ''.join(reversed(result))