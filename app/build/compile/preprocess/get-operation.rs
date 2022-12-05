fn get_operation x
 check is_str x
 
 let ext path_ext x
 
 if same ext "rs"
  ret "preprocess"
 
 if same ext "js"
  let dir path_dir x
  let name path_name x
  let prefix path_concat dir name
  let rs concat prefix ".rs"
  
  if is_file rs
   ret "skip"

  ret "inline"
 end
 
 if same ext "txt"
  ret "skip"
 
 stop "get-operation"
end
