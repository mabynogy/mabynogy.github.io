let controls arr
 
fn is_control x

 if is_empty controls
  let v1 "if elseif else forin fornum forof while"
  let v2 split v1 " "
  
  append controls v2
 end
 
 ret contain controls x
end
