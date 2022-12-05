fn get_parameter x
 check is_parameter x

 if is_etc x
  let s get_name x
  
  ret concat "..." s
 end
 
 ret x
end
