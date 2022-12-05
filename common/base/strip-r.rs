fn strip_r x y
 check is_str x
 check is_str y

 if match_r x y
  let n sub x.length y.length
  
  ret slice_l x n
 end
 
 ret x
end
