class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

// function inOrderPrint(root){
//     if (!root) return;
//     inOrderPrint(root.left);
//     console.log(root.val);
//     inOrderPrint(root.right);
// }

// function preOrderPrint(root) {
//     if (!root) return;
//     console.log(root.val);
//     preOrderPrint(root.left);
//     preOrderPrint(root.right);
// }

// function postOrderPrint(root){
//     if (!root) return;
//     postOrderPrint(root.left);
//     postOrderPrint(root.right);
//     console.log(root.val);
// }

module.exports = {
    TreeNode
};