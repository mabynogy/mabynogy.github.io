fn include x
 check is_str x
 
 let path path_real x

 log "include" path
 
 if is_file path
  ret include_file path
 elseif is_dir path
  ret include_dir path
 else   
  stop "include"
end
