fn or x y z:etc
 check is_bool x
 check is_bool y

 let r inline "x||y"
 
 if is_full z
  ret or r z:etc
 
 ret r
end
