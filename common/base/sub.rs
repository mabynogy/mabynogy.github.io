fn sub x y z:etc
 check is_num x
 check is_num y
 
 let r inline "x-y"
 
 if is_full z
  ret sub r z:etc
 
 ret r
end
