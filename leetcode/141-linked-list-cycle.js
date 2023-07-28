var hasCycle = function(head) {
    if (!head) return false
    let fast = head

    while (fast && fast.next) {
        head = head.next
        fast = fast.next.next

        if (head === fast) return true
    }

    return false
};