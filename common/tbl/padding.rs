fn tbl_padding x y
 check is_arr x
 check is_str y
 
 var r y.length
 
 forof x
  let v get value y
  let s to_str v
  
  assign r max r s.length
 end
 
 ret r
end
