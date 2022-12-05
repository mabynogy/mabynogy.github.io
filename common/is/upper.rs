fn is_upper x
 
 if not is_str x
  ret false
  
 if is_empty x
  ret false

 let s to_upper x
  
 ret same x s
end
