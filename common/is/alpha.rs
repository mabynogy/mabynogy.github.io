var alpha null

fn is_alpha x

 if not is_str x
  ret false

 if is_empty x
  ret false
  
 if is_null alpha
  let v1 "abcdefghijklmnopqrstuvwxyz"
  let v2 to_upper v1
  
  assign alpha concat v1 v2 "_"
 end

 forof x
  if not contain alpha value
   ret false  
 end
 
 ret true
end
