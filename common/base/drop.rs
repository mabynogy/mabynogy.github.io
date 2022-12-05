fn drop x y
 check is_arr x
 check is_full x
 
 if is_undef y
  ret call x.pop

 check is_uint y
  
 fornum y
  drop x
 end
end
