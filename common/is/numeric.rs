fn is_numeric x

 if not is_canonic x
  ret false
  
 let v JSON.parse x
 
 ret is_num v
end
