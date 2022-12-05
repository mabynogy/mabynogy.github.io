fn fs_locate x y z
 check is_str x
 
 if is_undef y
  ret fs_locate x is_fs z
  
 check is_fn y
 
 let base path_base x
 let s path_dir x
 let dir path_real s
 let dirs path_split dir
 
 while is_full dirs
  let dir path_join dirs
  let path path_concat dir base
  
  if y path
   ret path
  
  pop dirs
 end
 
 if is_str z
  ret z
 
 stop "fs-locate"
end

