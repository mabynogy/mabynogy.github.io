fn is_argument x

 if is_ident x
  ret true
  
 if is_etc x
  ret true

 ret false
end
