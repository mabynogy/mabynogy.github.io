fn is_ident x

 if not is_str x
  ret false
  
 if is_empty x
  ret false
  
 let v front x
 
 if not is_alpha v
  ret false
 
 ret is_alnum x
end
