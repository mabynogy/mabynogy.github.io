fn is_perform x

 if not is_obj x
  ret false
  
 if different x.operator "perform"
  ret false
  
 ret like_l x.parameters is_name
end
