fn path_shorten x
 check is_str x
 
 if not is_fs x
  ret x
 
 let real path_real x
 
 if lt real.length x.length
  ret real
 
 let relative path_relative x

 if lt relative.length x.length
  ret relative
 
 ret x
end
