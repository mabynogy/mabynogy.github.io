fn code_var x y
 check is_str x
 
 if is_str y
  if not is_lit y
   let s to_lit y
   
   ret code_var x s
  end
   
 if not is_json y
  let s to_json y
  
  ret code_var x s
 end
 
 ret concat "const " x "=" y
end
