fn get_name x
 
 if is_name x
  ret x
 
 if is_etc x
  let a split x ":"
  
  ret front a
 end
 
 stop "get-name"
end
