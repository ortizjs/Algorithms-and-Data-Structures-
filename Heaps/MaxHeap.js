class MaxHeap {
    constructor(){
        this.array = [null];
    }

    insert(node){
        this.array.push(node);
        this.heapifyUp(this.array.length - 1);
    }

    heapifyUp(idx){
        if (idx === 1) return;
        let parentIdx = this.getParentIdx(idx);
        if (this.array[parentIdx] < this.array[idx]){
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            this.heapifyUp(parentIdx);
        }
    }

    deleteMax(){
        let max = this.array[1];
        let newhead = this.array.pop();
        this.array[1] = newhead;
        this.heapifyDown(1);
        return max;
    }

    heapifyDown(idx){
        // if (idx === this.array.length - 1) return;
        let leftChildIdx = this.getChildIdx(idx);
        let rightChildIdx = this.getChildIdx(idx) + 1;
        let leftChild = this.array[leftChildIdx];
        let rightChild = this.array[rightChildIdx];
        let value = this.array[idx];
        if (leftChild === undefined) leftChild = -Infinity;
        if (rightChild === undefined) rightChild = -Infinity;
        if (value > leftChild && value > rightChild) return;
        let swapIdx;
        if (leftChild > rightChild){
            swapIdx = leftChildIdx;
        } else {
            swapIdx = rightChildIdx;
        }
        [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
        this.heapifyDown(swapIdx);
        
    }

    getParentIdx(idx){
        return Math.floor(idx/2);
    }

    getChildIdx(idx){
        return idx * 2;
    }
}

let heap = new MaxHeap();
heap.insert(42);
heap.insert(32);
heap.insert(24);
heap.insert(100);
heap.insert(50);
heap.insert(27);
console.log(heap.array);
console.log(heap.deleteMax());
console.log(heap.array);
