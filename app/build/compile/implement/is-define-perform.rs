fn is_define_perform x y
 check is_str y
 
 if not is_obj x
  ret false
  
 if different x.operator y
  ret false
 
 ret like_l x.parameters is_ident "perform" is_name
end
