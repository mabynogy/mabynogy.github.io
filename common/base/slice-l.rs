fn slice_l x y
 check is_vec x
 check is_uint y
 check lte y x.length
 
 ret slice x 0 y
end
