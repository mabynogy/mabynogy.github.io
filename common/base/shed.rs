fn shed x

 fn is_dispensable x
  if is_none x
   ret true   
  elseif is_zero x
   ret true
  elseif is_empty x
   ret true   
  else
   ret false
 end
 
 if is_arr x
  let r arr
  
  forin x
   let value get x key
   
   if is_dispensable value
    cont
    
   let v shed value
   
   push r v
  end
  
  ret r
 elseif is_obj x
  let r obj
  
  forin x
   let value get x key
   
   if is_dispensable value
    cont
    
   let v shed value
   
   put r key v
  end
  
  ret r
 else
  ret x
end
