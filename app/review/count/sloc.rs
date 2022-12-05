fn count_sloc x y
 check is_str x
 
 if is_undef y
  ret count_sloc x "*.rs"
  
 check is_str x
 
 if is_file x
  let base path_base x
  
  if match base y
   let cache_untrivia memoize untrivia
   let content file_load x
   let code cache_untrivia content
   let a split code
   
   ret a.length
  else
   ret 0
 elseif is_dir x
  var r 0
  
  forof dir_load x
   let n count_sloc value
   
   add r n
  end
  
  ret r
 else
  stop
end
