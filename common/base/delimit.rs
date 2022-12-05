fn delimit x y
 check is_vec x
 
 if is_str x
  let a explode x
  
  ret scan a y
 end
 
 if is_str y
  fn match x
   ret same x y
  end
  
  ret delimit x match
 end

 check is_fn y
 
 let r arr
 let a dup x
 
 while is_full a
  let right shift a
  
  if is_empty r
   push r right
   
   cont
  end
  
  let left back r
  let v concat left right
  
  if y v
   pop r
   push r v
  else
   push r right
 end
 
 ret r
end
