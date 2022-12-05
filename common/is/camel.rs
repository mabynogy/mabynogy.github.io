fn is_camel x

 if not is_ident x
  ret false
 
 forof x
  if same value "_"
   cont 
   
  if is_alpha value
   if is_upper value
    ret true
 end
 
 ret false
end
