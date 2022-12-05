fn sort x y
 check is_arr x
 
 if is_undef y  
  x.sort
  
  ret
 end
  
 check is_fn y
 
 x.sort y
end
