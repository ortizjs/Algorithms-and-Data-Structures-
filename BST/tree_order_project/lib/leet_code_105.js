// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (preorder.length === 0 && inorder.length === 0) return null;

    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    let midIndex = inorder.indexOf(rootVal);

    let leftInorder = inorder.slice(0, midIndex);
    let rightInorder = inorder.slice(midIndex + 1);

    let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
    let rightPreorder = preorder.filter((val) => rightInorder.includes(val));

    // console.log(leftPreorder);

    let leftTree = buildTree(leftPreorder, leftInorder);
    let rightTree = buildTree(rightPreorder, rightInorder);

    root.left = leftTree;
    root.right = rightTree;

    return root;

}

preorder = [3, 9, 20, 15, 7];
inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
// console.log(buildTree([], []));