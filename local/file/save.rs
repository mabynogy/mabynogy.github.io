fn file_save x y
 check is_str x
 check is_str y

 if is_file x
  if is_empty y
   file_remove x
   
   ret
  end
  
  let n file_size x
  let limit mul 4 1024 1024
  
  if lt n limit
   if same n y.length
    let v file_read x
    
    if same v y
     ret
   end
  end
 elseif is_empty y
  ret
 else
  let dir path_dir x
  
  if not is_dir dir
   dir_make dir
 end
 
 file_write x y
end

