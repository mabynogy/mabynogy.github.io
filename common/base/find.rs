fn find x y z
 check is_vec x
 check is_def y
 
 if is_undef z
  ret find x y 0
 
 if is_str x
  check is_str y

  if is_empty x
   ret -1
  
  if is_empty y
   ret -1
  
  ret x.indexOf y z
 elseif is_arr x
  if is_empty x
   ret -1
  
  ret x.indexOf y z
 else
  stop "find"
end
