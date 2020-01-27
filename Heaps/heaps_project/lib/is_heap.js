// you may assume that the array will always have a null element at the 0-th index
// import {MaxHeap} from './max_heap';
// function isMaxHeap(array, idx=1) {
//     // let Heap = new MaxHeap();
//     if (array[idx] === undefined) return true;
//     let leftIdx = idx * 2;
//     let rightIdx = idx * 2 + 1;
//     let leftChild = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
//     let rightChild = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
//     return array[idx] > leftChild && array[idx] > rightChild 
//         && isMaxHeap(array, rightIdx) 
//         && isMaxHeap(array, leftIdx);
// }

function isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let leftChild = array[leftIdx] === undefined ? -Infinity : array[leftIdx]; 
    let rightChild = array[rightIdx] === undefined ? -Infinity : array[rightIdx]; 
    return array[idx] > rightChild && array[idx] > leftChild 
        && isMaxHeap(array, leftIdx)
        && isMaxHeap(array, rightIdx);
}


module.exports = {
    isMaxHeap
};