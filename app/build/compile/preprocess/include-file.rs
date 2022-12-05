fn include_file x
 check is_str x
   
 let operation get_operation x
 
 if same operation "preprocess"
  let dir path_dir x
  let content file_load x

  ret os_work dir preprocess content
 end
  
 if same operation "inline"
  let cache_untrivia memoize untrivia
  let content file_load x
  let code cache_untrivia content
  let s to_lit code
  let operator "inline"
  let parameters arr s
  let children arr
  
  ret obj operator parameters children
 end
   
 if same operation "skip"
  ret arr

 stop "include-file"    
end
