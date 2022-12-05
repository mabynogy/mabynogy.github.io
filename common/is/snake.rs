fn is_snake x

 if not is_ident x
  ret false
  
 if not contain x "_"
  ret false
 
 if not is_lower x
  ret false
  
 ret true
end
