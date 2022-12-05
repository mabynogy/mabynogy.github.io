fn is_url x

 if is_ln x
  if match_l x "http://"
   ret true

  if match_l x "https://"
   ret true
 end
 
 ret false
end
