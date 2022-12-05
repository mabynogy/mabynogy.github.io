fn is_comment x

 if is_ln x
  if match_l x "//"
   ret true
 
 ret false
end
