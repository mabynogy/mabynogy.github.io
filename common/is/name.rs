fn is_name x

 if is_ident x
  ret true
  
 if is_access x
  ret true
 
 ret false
end
