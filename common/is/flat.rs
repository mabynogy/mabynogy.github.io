fn is_flat x

 if is_null x
  ret true

 if is_bool x
  ret true

 if is_num x
  ret true
 
 if is_ln x
  ret true
  
 ret false 
end
