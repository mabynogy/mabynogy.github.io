fn is_key x

 if is_str x
  ret true
  
 if is_sym x
  ret true
  
 ret false
end
