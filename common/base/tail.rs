fn tail x y
 check is_vec x
 
 if is_undef y
  ret tail x 16
  
 check is_uint y
 
 let n min x.length y
 
 ret slice_r x n
end
