function heapSort(array){
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }
    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--){
        swap(array, 0, endOfHeap);
        heapify(array, endOfHeap, 0);
    }
    return array;
}

function heapify(array, n ,i){
    let leftIdx = i * 2 + 1;
    let rightIdx = i * 2 + 2;
    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (array[i] > rightVal && arr[i] > leftVal) return;

    let swapIdx;
    if (rightVal > leftVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
}

function swap(array, i, j){
    [array[i], array[j]] = [array[j], array[i]];
}




















// function heapSort(array){
//     for (let i = array.length - 1; i >= 0; i--){
//         heapify(array, array.length, i);
//     }

//     for (let endOfheap = array.length - 1; endOfheap >= 0; endOfheap--){
//         swap(array, 0, endOfheap);
//         heapify(array, endOfheap, 0);
//     }
//     // console.log(array);
//     return array;
// }

// function heapify(array, n, i) {
//     let leftIdx  = 2 * i + 1;
//     let rightIdx  = 2 * i + 2;
//     let leftChild = array[leftIdx];
//     let rightChild = array[rightIdx];

//     if (leftIdx >= n) leftChild = -Infinity; // if the left index falls outside the heap, reset to -Infinity for later comparison.
//     if (rightIdx >= n) rightChild = -Infinity; // if the right index falls outside the heap, reset to -Infinity for later comparison.

//     if (array[i] > leftChild && array[i] > rightChild) return;

//     let swapIdx;
//     if (leftChild > rightChild) {
//         swapIdx = leftIdx;
//     } else {
//         swapIdx = rightIdx;
//     }
//     swap(array, i, swapIdx);
//     heapify(array, n , swapIdx);
// }
 
// function swap(array, i , j){
//     [array[i], array[j]] = [array[j], array[i]];
// }


let arr = [7, 9, 6, 10, 20, 4, 8, 21];
// heapSort(arr);
console.log(heapSort(arr));
