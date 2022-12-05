fn at x y
 check is_vec x
 check is_uint y
 check lt y x.length
 
 ret inline "x[y]"
end
