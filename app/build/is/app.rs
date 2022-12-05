fn is_app x

 if is_local_app x
  ret true  

 if is_remote_app x
  ret true  
  
 ret false
end
