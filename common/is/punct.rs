fn is_punct x

 if not is_str x
  ret false

 if is_empty x
  ret false
  
 let s "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"

 forof x
  if not contain s value
   ret false  
 end
 
 ret true
end
