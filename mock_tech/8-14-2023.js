// with Daniel 

// while (head) {
//     let mult = head.val * 3
//     // dont need tenery
//     let leftover = mult >= 10 ? mult / 10 : 0 // Math.floor(for division) 
//     mult = mult >= 10 ? mult % 10 : mult // 
    
//     carry.push(leftover)
    
//     head.val = mult
//     head = head.next
// }



// function multiply3LinkedList(head) {
//     if (!head) return null
//     let newHead = new Node(0)
//     let trueHead = newHead
//     let value = "" // 1334
    
//     while (head) {
//         value += head.val
//         head = head.next
//     }
    
//     value = String(Number(value) * 3)

//     for (let i = 0; i < value.length; i++) {
//         let digit = value[i]
//         let node = new Node(digit)
    
//         newHead.next = node
//         newHead = newHead.next
//     }
    
//     return trueHead.next
// }


function multiply3LinkedList(head) {
    if (!head) return null
    let trueHead = head // curr
    let otherHead = head // curr1
    let value = "" // 1334
    let counter = 0
    
    while (head) {
        value += head.val // 
        head = head.next
        counter++
    }
    
    value = String(Number(value) * 3) // O(n) 
    
    if (value.length > counter) {
        let node = new Node(0) 
        node.next = head
    }
    
    let place = 0
    
    while (trueHead) {
        trueHead.val = Number(value[place])
        trueHead = trueHead.next
        place++
    }
    
    return otherHead
}