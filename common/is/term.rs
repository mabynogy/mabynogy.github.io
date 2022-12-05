fn is_term x

 if is_val x
  ret true
 
 if is_tuple x
  ret true
 
 ret false
end
