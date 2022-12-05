fn rule_rvalue x y:etc
 check is_term x
 
 if same x "inline"
  ret rule_inline y:etc
 elseif same x "val"
  ret rule_val y:etc
 elseif same x "arr"
  ret rule_arr y:etc
 elseif same x "obj"
  ret rule_obj y:etc
 elseif same x "call"
  ret rule_call y:etc
 elseif same x "new"
  ret rule_new y:etc
 elseif same x "instanceof"
  ret rule_instanceof y:etc
 elseif is_nonic x
  check is_empty y
  
  ret x
 elseif is_boolic x
  check is_empty y
  
  ret x
 elseif is_numeric x
  check is_empty y
  
  ret x
 elseif is_lit x
  check is_empty y
  
  ret x
 elseif is_name x
  if is_empty y
   ret x
   
  ret rule_call x y:etc
 else
  stop
end
