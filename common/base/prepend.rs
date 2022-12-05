fn prepend x y
 check is_arr x
 check is_arr y
 
 forin y
  let v to_int key
  let value back y v
  
  unshift x value
 end
end
