fn mod x y z:etc
 check is_num x
 check is_num y
 check not is_zero y

 let r inline "x%y"
 
 if is_full z
  ret mod r z:etc
 
 ret r
end
