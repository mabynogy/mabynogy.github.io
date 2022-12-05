fn get_random_str x
 check is_num x
 
 let a arr
 
 fornum x
  let n mul 256 256
  let v get_random n
  let s chr v
  
  push a s
 end

 ret implode a
end
