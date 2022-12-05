fn tbl_pad x y
 check is_arr x
 check is_str y
 
 if tbl_num x y
  tbl_pad_l x y
 else
  tbl_pad_r x y 
end
