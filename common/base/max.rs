fn max x y z:etc
 check is_num x
 check is_num y
 
 let r Math.max x y
 
 if is_full z
  ret max r z:etc
 
 ret r
end
