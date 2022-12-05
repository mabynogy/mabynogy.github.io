fn is_container x

 if is_arr x
  ret true
 
 if is_obj x
  ret true
  
 ret false
end
