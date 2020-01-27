function treeHeight(root) {
    if (!root) return -1;
    // if (!root.left && !root.right) return 0;
    // let edges = 0;
    // if (root.left || root.right) {
    //     edges ++;
    //     if (root.left) edges += treeHeight(root.left);
    //     if (root.right) edges += treeHeight(root.right);
    // }
    // return edges;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}


module.exports = {
    treeHeight
};