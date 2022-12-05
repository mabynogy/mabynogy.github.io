fn is_run x

 if not is_obj x
  ret false

 if different x.operator "run"
  ret false

 if is_empty x.parameters
  ret false
  
 if not every x.parameters is_coolic
  ret false
  
 ret true
end
