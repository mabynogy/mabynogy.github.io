fn is_include x

 if not is_obj x
  ret false

 if different x.operator "include"
  ret false
  
 ret like_l x.parameters is_lit
end
