fn is_sub_dir x

 if not is_dir x
  ret false
  
 forof dir_read x
  if is_file value
   ret false
 end
 
 ret true
end
