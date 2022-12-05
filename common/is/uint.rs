fn is_uint x

 if not is_int x
  ret false

 if is_zero x
  ret true
 
 if is_pos x
  ret true 
 
 ret false
end
