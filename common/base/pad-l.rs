fn pad_l x y z

 if is_uint x
  let s to_str x
  
  if is_undef z
   if is_undef y
    ret pad_l s 3 "0"
   
   ret pad_l s y "0"
  end

  if is_undef y
   ret pad_l s 3 z

  ret pad_l s y z
 end
 
 if is_undef z
  ret pad_l x y " "
 
 check is_str x
 check is_uint y
 check is_str z
 
 ret x.padStart y z
end
