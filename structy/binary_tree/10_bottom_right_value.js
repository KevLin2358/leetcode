class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bottomRightValue = (root) => {
    if (!root.left && !root.right) return root.val

    let stack = [ [root] ]
    let flag = true

    // time: O(h) where h is the height of the tree
    while (flag) {
        let curr = stack.pop()
        let arr = []
        
        // time: O(n) // number of nodes within a lvl
        for (let i = 0; i < curr.length; i++) {
            let currNode = curr[i]

            if (currNode.left) arr.push(currNode.left)
            if (currNode.right) arr.push(currNode.right)
        }

        // time: O(n) // number of nodes within a lvl
        flag = arr.some((currNode) => {
            if (currNode.left || currNode.right) return true
            return false
        })

        stack.push(arr)
    }
    
    let subArrLength = stack[0].length - 1
    return stack[0][subArrLength].val
}


// test cases

// /* // test case 0
    const a = new Node(3);
    const b = new Node(11);
    const c = new Node(10);
    const d = new Node(4);
    const e = new Node(-2);
    const f = new Node(1);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //       3
    //    /    \
    //   11     10
    //  / \      \
    // 4   -2     1

    console.log(bottomRightValue(a)); // -> 1
// */

/* // test case 01
    const a = new Node(-1);
    const b = new Node(-6);
    const c = new Node(-5);
    const d = new Node(-3);
    const e = new Node(-4);
    const f = new Node(-13);
    const g = new Node(-2);
    const h = new Node(6);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    e.right = h;

    //        -1
    //      /   \
    //    -6    -5
    //   /  \     \
    // -3   -4   -13
    //     / \       
    //    -2  6

    bottomRightValue(a); // -> 6
*/

/* // test case 02
    const a = new Node(-1);
    const b = new Node(-6);
    const c = new Node(-5);
    const d = new Node(-3);
    const e = new Node(-4);
    const f = new Node(-13);
    const g = new Node(-2);
    const h = new Node(6);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    e.right = h;

    //        -1
    //      /   \
    //    -6    -5
    //   /  \     \
    // -3   -4   -13
    //     / \       
    //    -2  6

    bottomRightValue(a); // -> 6
*/

/* // test case 03
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');

    a.left = b;
    a.right = c;
    b.right = d;
    d.left = e;
    e.right = f;

    //      a
    //    /   \ 
    //   b     c
    //    \
    //     d
    //    /
    //   e
    //  /
    // f
            
    bottomRightValue(a); // -> 'f'
*/

/* // test case 04
    const a = new Node(42);

    //      42

    bottomRightValue(a); // -> 42
*/