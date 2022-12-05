fn concat x y z:etc

 if is_num x
  let s to_str x
  
  ret concat s y z:etc
 end

 if is_num y
  let s to_str y
  
  ret concat x s z:etc
 end
 
 check is_str x
 check is_str y
 
 let r inline "x+y"
 
 if is_full z
  ret concat r z:etc
 
 ret r
end
