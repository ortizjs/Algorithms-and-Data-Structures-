##Writing an implementation of a DFS using a stack
## Easiest way to think about DFS is to think of it recursively 
def DFS(root, target)
    ## base case: 
    return nil if root.nil?
    return root if root.value == target
    ##indecutive step: 
    ## DFS on the left side then DFS on the right side 
    root.children.each do |child|
        search_result = DFS(child, target) ## better to save the actual value then check the value then return nil
        return search_result unless search_result.nil?
    end    
    return nil
end