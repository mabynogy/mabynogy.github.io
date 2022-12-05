fn normalize x

 if is_arr x
  let r arr
  
  forof x
   let s value.operator
   
   if same s "end"
    cont

   let node normalize value
    
   push r node
  end
  
  ret r
 elseif is_obj x
  let operator x.operator
  let parameters x.parameters
  let children normalize x.children
  
  ret obj operator parameters children  
 else
  stop "normalize"
end
