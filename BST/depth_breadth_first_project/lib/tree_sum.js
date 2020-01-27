function treeSum(root) {
    if (!root) return 0;
    // let sum = 0;

    // sum += root.val;
    // if (root.left) sum += treeSum(root.left);
    // if (root.right) sum += treeSum(root.right);
    // return sum;
    return treeSum(root.left) + root.val + treeSum(root.right);
}


module.exports = {
    treeSum
};