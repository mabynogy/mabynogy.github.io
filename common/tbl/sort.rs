fn tbl_sort x y
 check is_arr x
 check is_str y
 
 fn compare x y z
  check is_str x
  check is_obj y
  check is_obj z
  
  let left get y x
  let right get z x
  
  ret cmp left right
 end
 
 let fn partial compare y
 
 sort x fn 
end
