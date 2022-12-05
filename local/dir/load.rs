fn dir_load x
 check is_str x

 let r arr

 forof dir_read x
  if is_file value
   push r value
  elseif is_dir value
   let a dir_load value
   
   append r a  
  else
   stop "dir-load"
 end
 
 ret r
end
