fn is_ret_perform x

 if not is_obj x
  ret false
  
 if different x.operator "ret"
  ret false
  
 ret like_l x.parameters "perform" is_name
end
