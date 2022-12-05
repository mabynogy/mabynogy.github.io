fn is_assign_perform x

 if not is_obj x
  ret false
  
 if different x.operator "assign"
  ret false
 
 ret like_l x.parameters is_name "perform" is_name
end
