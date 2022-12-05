fn shift x y
 check is_arr x
 check is_full x
 
 if is_undef y
  ret call x.shift

 check is_uint y
  
 let r arr
 
 fornum y
  let v shift x
  
  push r v
 end
 
 ret r
end
