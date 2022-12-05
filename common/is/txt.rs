fn is_txt x

 if is_str x
  if contain x "\n"
   ret true

  if contain x "\r"
   ret true
 end
 
 ret false
end
