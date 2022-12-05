fn tbl_num x y
 check is_arr x
 check is_str y
 
 if is_empty x
  ret false
 
 forof x
  let v get value y
  
  if not is_num v
   ret false
 end
 
 ret true
end
