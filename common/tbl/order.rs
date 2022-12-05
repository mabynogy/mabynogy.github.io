fn tbl_order x
 check is_arr x
 
 forin x
  let index to_uint key
  let order inc index
  let value get x key
  let v obj order
  
  merge v value
  put x key v  
 end 
end
