fn slice x y z
 check is_vec x
 check is_uint y
 check lte y x.length
 
 if is_undef z
  let v sub x.length y
  
  ret slice x y v
 end
 
 check is_uint z
 check lte z x.length
 
 let v add y z
 
 check lte v x.length
 
 ret x.slice y v
end
