fn is_task x

 if is_fn x
  ret true

 if is_gn x
  ret true

 if is_iterator x
  ret true
 
 ret false
end
