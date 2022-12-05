fn is_space x

 if not is_str x
  ret false

 if is_empty x
  ret false
  
 let s " \t"
 
 forof x
  if not contain s value
   ret false  
 end
 
 ret true
end
