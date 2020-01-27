function inOrderArray(root) {
    let nodes = [];
    if (!root) return nodes;
    inOrderArray(root.left);
    // console.log(root.val);
    nodes.push(root.val);
    inOrderArray(root.right);
    return nodes;
}

function postOrderArray(root) {
    let nodes= [];
    if (!root) return nodes;
    postOrderArray(root.left);
    postOrderArray(root.right);
    nodes.push(root.val);
    return nodes;
}


module.exports = {
    inOrderArray,
    postOrderArray
};