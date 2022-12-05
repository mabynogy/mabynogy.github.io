fn is_tbl x

 if not is_arr x
  ret false

 if is_empty x
  ret true
  
 let first front x
 
 if not is_obj first
  ret false
  
 let columns get_keys first
  
 forof x
  if not is_obj value
   ret false
   
  let keys get_keys value
  
  if neq keys columns
   ret false
   
  let values get_values value

  forof values
   if not is_flat value
    ret false
  end
 end
  
 ret true
end
