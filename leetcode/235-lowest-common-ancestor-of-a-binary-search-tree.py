class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        low = p
        high = q

        if low.val > high.val:
            low = q
            high = p

        if (root.val >= low.val and root.val <= high.val):
            print("hit = ")
            return root
        
        if root.val > high.val:
            print("hit <")
            return self.lowestCommonAncestor(root.left, p, q)
        elif root.val < low.val:
            print("hit >")
            return self.lowestCommonAncestor(root.right, p, q)