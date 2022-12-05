fn path_unique x
 check is_str x
 
 if not is_fs x
  ret x
  
 let dir path_dir x
 let name path_name x
 let ext path_ext x
 
 fornum 10000
  let suffix pad_l key 3
  let sname concat name "-" suffix
  var base sname
  
  if is_full ext
   assign base concat base "." ext
   
  let r path_concat dir base
   
  if not is_fs r
   ret r
 end
 
 stop "path-unique"
end
