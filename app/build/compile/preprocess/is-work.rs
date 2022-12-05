fn is_work x

 if not is_obj x
  ret false

 if different x.operator "work"
  ret false

 if not is_many x.parameters
  ret false
  
 if not every x.parameters is_coolic
  ret false
  
 ret true
end
