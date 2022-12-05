fn path_tmp x y
 check is_str x
 check is_str y
 
 let pattern path_concat "tmp" x
 
 if is_file pattern
  let s file_read pattern
  
  if same s y
   ret pattern
 end
 
 let r path_unique pattern
 
 file_save r y
 
 ret r  
end
