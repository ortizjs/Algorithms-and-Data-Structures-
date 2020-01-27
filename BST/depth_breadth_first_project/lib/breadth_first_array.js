function breadthFirstArray(root) {
    let queue = [root];
    let nodes = [];

    while(queue.length){
        let node = queue.shift();
        nodes.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return nodes;
}

module.exports = {
    breadthFirstArray
};