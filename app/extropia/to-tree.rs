fn to_tree x
 check is_arr x
 
 fn get_children x y
  check is_obj x
  check is_arr y
  
  let r arr
  let id x.id
  
  forof y
   if different value.parent id
    cont
    
   let children get_children value y
   let o dup value
   
   assign o.children children      
   push r o
  end
  
  ret r
 end
 
 let r arr
 
 forof x
  if not is_zero value.parent
   cont
  
  let children get_children value x
  let o dup value
  
  assign o.children children
  
  push r o
 end 
 
 ret r
end

