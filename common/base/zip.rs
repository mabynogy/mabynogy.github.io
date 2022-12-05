fn zip x y
 check is_arr x
 
 if is_undef y
  let a dim x.length null
  
  ret zip x a
 end
  
 check is_arr y 
 check same x.length y.length
 
 let r obj
 
 forin x
  let n to_uint key
  let k at x n
  let v at y n
  
  put r k v
 end

 ret r
end
