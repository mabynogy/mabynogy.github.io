fn contain x y
 check is_vec x
 
 if is_str x
  check is_str y
  
  if is_empty x
   ret false

  if is_empty y
   ret false
   
  ret x.includes y
 elseif is_arr x
  check is_def y
  
  if is_empty x
   ret false

  ret x.includes y
 else
  stop
end
