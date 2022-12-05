fn tbl_remove_column x y
 check is_arr x
 check is_str y
 
 let a dup x
 
 clear x
 
 forof a
  let o obj
  
  forin value
   if same key y
    cont
   
   let v get value key
    
   put o key v
  end
  
  push x o
 end
end

