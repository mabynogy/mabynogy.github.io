fn pad_r x y z

 if is_uint x
  let s to_str x
  
  if is_undef z
   if is_undef y
    ret pad_r s 3 "0"
   
   ret pad_r s y "0"
  end

  if is_undef y
   ret pad_r s 3 z

  ret pad_r s y z
 end
 
 if is_undef z
  ret pad_r x y " "
 
 check is_str x
 check is_uint y
 check is_str z
 
 ret x.padEnd y z
end
