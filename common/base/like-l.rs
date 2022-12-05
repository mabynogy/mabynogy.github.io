fn like_l x y:etc
 check is_arr x
 
 fornum y.length
  if gte key x.length
   ret false
  
  let left at x key
  let right at y key
  
  check is_str left
  
  if is_str right
   if different left right
    ret false
  elseif is_fn right
   let res right left
   
   check is_bool res
   
   if is_false res
    ret false
  else
   stop "like-l"
 end
 
 ret true
end
