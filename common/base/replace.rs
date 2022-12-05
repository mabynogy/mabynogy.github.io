fn replace x y z
 check is_vec x
 
 if is_str x
  check is_str x
  check is_str y
  
  let a split x y
  
  ret join a z
 elseif is_arr x
  check is_def x
  check is_def z
  
  forin x
   let value get x key
   
   if same value x
    put x key y
  end
 else
  stop "replace"  
end
