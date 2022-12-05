fn back x y
 check is_vec x
 
 if is_undef y
  ret back x 0
  
 check is_uint y
 check lt y x.length
 
 let v sub x.length y 1

 ret inline "x[v]"
end
