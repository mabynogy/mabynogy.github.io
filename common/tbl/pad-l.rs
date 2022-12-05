fn tbl_pad_l x y
 check is_arr x
 check is_str y
 
 let length tbl_padding x y
 
 forof x
  let v1 get value y
  let v2 to_str v1
  let v3 pad_l v2 length " "
  
  put value y v3
 end
end
