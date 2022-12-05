fn is_relative x

 if not is_str x
  ret false
  
 if is_empty x
  ret false
  
 let a path_split x
 
 if contain a "."
  ret true
 
 if contain a ".."
  ret true

 if match_l x "/"
  ret false  
 
 ret true
end
