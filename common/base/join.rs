fn join x y
 check is_arr x
 
 if is_undef y
  ret join x "\n"
 
 check is_str y
 
 ret x.join y
end
