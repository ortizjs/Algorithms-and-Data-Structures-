class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.length < 1
    new_piv = rand(array.length)
    array[0], array[new_piv] = array[new_piv], array[0]

    pivot = array.first 
    left = array.select {|ele| pivot > ele}
    middle = [pivot]

    right = array.select {|ele| pivot <= ele}
  end

  # In-place.
  def self.sort2!(arr, start = 0, len = arr.length, &prc)
     prc ||= Proc.new {|el1, el2| el1 <=> el2 }
     return arr if len < 2
     pivot_idx = partition(arr, start, len, &prc)
     left_len = pivot_idx - start
     right_len = len - (left_len + 1)
     sort2!(arr, start, left_len, &prc)
     sort2!(arr, pivot_idx + 1, right_len, &prc)
  end

  def self.partition(arr, start, len, &prc)
    prc ||= Proc.new {|el1, el2| el1 <=> el2 }
    pivot_idx = start 
    arr[start]
    ((start + 1)...(start + len)).each do |idx|
      if prc.call(pivot_idx, arr[idx]) > 0 
        arr[idx], arr[pivot_idx + 1] = arr[pivot_idx + 1], arr[idx]
        pivot_idx += 1
      end
    end

    arr[start], arr[pivot_idx] = arr[pivot_idx], arr[start]
    pivot_idx
    
  end
end
