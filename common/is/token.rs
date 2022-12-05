fn is_token x

 if is_comment x
  ret true
  
 if is_term x
  ret true
 
 ret false
end
