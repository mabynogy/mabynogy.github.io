fn slice_r x y
 check is_vec x
 check is_uint y
 check lte y x.length
 
 let v sub x.length y
 
 ret slice x v y
end
