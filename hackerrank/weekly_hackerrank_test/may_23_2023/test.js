function delete_from_end(head, k) {
    let maxLength = 1
    let current = head
    
    while (current) {
        maxLength++
        current = current.next
    }
    
    let target = maxLength - k - 1
    let count = 1
    
    if (maxLength - 1 === k) return head.next
    
    current = head
    
    while (current) {
        let next = current.next
        if (count === target) {
            current.next = next.next
            return head
        }
        count++
        current = current.next
    }
    
}