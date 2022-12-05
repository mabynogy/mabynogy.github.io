fn remove x y z
 check is_arr x
 check is_uint y
 check lt y x.length
 
 if is_undef z
  ret remove x y 1

 check is_uint z
  
 let n add y z
  
 check lte n x.length
 
 x.splice y z
end
