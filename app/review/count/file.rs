fn count_file x y
 check is_str x
 check is_str y
 
 var r 0
 
 forof dir_load x
  let base path_base value
  
  if match base y
   inc r
 end
 
 ret r
end
