fn is_val x

 if is_numeric x
  ret true
  
 if is_lit x
  ret true

 if is_ident x
  ret true

 if is_access x
  ret true
  
 ret false
end
