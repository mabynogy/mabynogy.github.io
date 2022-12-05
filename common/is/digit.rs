fn is_digit x

 if not is_str x
  ret false

 if is_empty x
  ret false
  
 let s "0123456789"
 
 forof x
  if not contain s value
   ret false  
 end
 
 ret true
end
