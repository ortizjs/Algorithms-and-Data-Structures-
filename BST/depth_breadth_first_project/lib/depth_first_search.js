function depthFirstSearch(root, targetVal) {
    // if (!root) return null;
    // if (root.val === targetVal) return root;
    // return depthFirstSearch(root.left, targetVal); 
    // return depthFirstSearch(root.right, targetVal); 

    let stack = [root];
    while(stack.length) {
        let node = stack.pop();
        if (node.val === targetVal) return node;
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return null;
}


module.exports = {
    depthFirstSearch
};