class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        operators = {
            '+': lambda num1, num2: num1 + num2,
            '-': lambda num1, num2: num1 - num2,
            '*': lambda num1, num2: num1 * num2,
            '/': lambda num1, num2: int(num1/num2)
        }

        for element in tokens:
            if element in operators:
                num2 = stack.pop()
                num1 = stack.pop()
                stack.append(operators[element](num1, num2))
            else:
                stack.append(int(element))

        return stack[0]