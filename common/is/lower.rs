fn is_lower x

 if not is_str x
  ret false
  
 if is_empty x
  ret false
  
 let s to_lower x
  
 ret same x s
end
