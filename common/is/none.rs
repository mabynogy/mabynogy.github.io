fn is_none x

 if is_undef x
  ret true

 if is_null x
  ret true
  
 ret false
end
