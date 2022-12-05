fn pop x y
 check is_arr x
 check is_full x
 
 if is_undef y
  ret call x.pop

 check is_uint y
  
 let r arr
 
 fornum y
  let v pop x
  
  push r v
 end
 
 ret r
end
