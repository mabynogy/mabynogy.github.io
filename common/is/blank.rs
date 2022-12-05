fn is_blank x

 if not is_str x
  ret false

 if is_empty x
  ret true
  
 ret is_space x
end
