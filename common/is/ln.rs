fn is_ln x

 if is_str x
  if contain x "\n"
   ret false

  if contain x "\r"
   ret false
   
  ret true
 end
 
 ret false
end
