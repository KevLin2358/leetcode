var doubleIt = function(head) {
    let reverse = reverseList(head)
    let carry = 0
    let curr = reverse

    while (curr) {
        let total = (curr.val * 2) + carry
        carry = Math.floor(total / 10)
        total = total % 10
        curr.val = total
        curr = curr.next
    }

    let reverted = reverseList(reverse)

    if (carry) {
        let node = new ListNode(carry)
        node.next = reverted
        return node
    }

    return reverted
};


function reverseList(head) {
    let prev = null
    let curr = head

    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}


// Runtime
// 168ms
// Beats 77.27% of users with JavaScript

// Memory
// 57.08mb
// Beats 99.09%of users with JavaScript