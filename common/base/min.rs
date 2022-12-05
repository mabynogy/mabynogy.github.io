fn min x y z:etc
 check is_num x
 check is_num y
 
 let r Math.min x y
 
 if is_full z
  ret min r z:etc
 
 ret r
end
