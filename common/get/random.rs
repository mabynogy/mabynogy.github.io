fn get_random x
 check is_num x
 
 let n call Math.random
 let r mul n x
 
 if is_uint x
  ret trunc r
 
 ret r
end
