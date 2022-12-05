fn is_label x

 if is_name x
  ret true
  
 if is_lisp x
  ret true
 
 ret false
end
