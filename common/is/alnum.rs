fn is_alnum x

 if not is_str x
  ret false

 if is_empty x
  ret false
  
 forof x
  if is_alpha value
   nop
  elseif is_digit value
   nop
  else
   ret false
 end
 
 ret true
end
