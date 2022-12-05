fn is_define x y z
 check is_str y
 check is_str z
 
 if not is_obj x
  ret false

 if different x.operator y
  ret false
  
 if not like_l x.parameters is_ident z is_coolic
  ret false
  
 let a slice x.parameters 2
 
 ret every a is_coolic
end
