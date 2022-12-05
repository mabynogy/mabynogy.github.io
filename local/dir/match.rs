fn dir_match x y
 check is_str x

 if is_undef y
  ret dir_match x "."

 check is_str y
 
 let r arr
 let dir path_real y
 
 forof dir_load dir
  if match value x
   push r value
 end
 
 ret r
end
