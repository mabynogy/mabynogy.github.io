fn scan x y
 check is_vec x
 
 if is_str x
  let a explode x
  
  ret scan a y
 end
 
 if is_str y
  fn match x
   ret same x y
  end
  
  ret scan x match
 end

 check is_fn y
 
 fn reduce x y
  check is_arr x
  check is_fn y
  
  let r dup x
  
  while is_full r
   let s implode r
   
   if y s
    ret r
   
   pop r
  end
  
  let s front x
  
  push r s
  
  ret r
 end

 let r arr
 let a dup x
 
 while is_full a
  let parts reduce a y
  let s implode parts
  
  push r s
  shift a parts.length
 end
 
 ret r
end
