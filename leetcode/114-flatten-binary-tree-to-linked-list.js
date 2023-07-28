var flatten = function(root) {
    if (!root) return null
    
    let head1 = new TreeNode(0, null, null) // new Node(0)
    let stack = [ root ] // 5 2
    
    while(stack.length > 0) {
        let current = stack.pop() // 1
        
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
        
        head1.left = null
        head1.right = current
        head1 = head1.right
    }
    
    return root  
};


// var flatten = function(root) {
//     if (!root) return null
    
//     let head1 = root // 5
//     let stack = [] // 6

//     if (head1.right) stack.push(head1.right)
//     if (head1.left) stack.push(head1.left)
    
//     while(stack.length > 0) {
//         let current = stack.pop() // 3
        
//         if (current.right) stack.push(current.right)
//         if (current.left) stack.push(current.left)
        
//         head1.left = null
//         head1.right = current
//         head1 = head1.right
//     }
    
//     return root 
// };