fn path_relative x y
 check is_str x
 
 if is_fs x
  let s path_real x
 
  if different x s
   ret path_relative s y
 end

 if is_undef y
  let s call process.cwd
  
  ret path_relative x s
 end
 
 if is_fs y
  let s path_real y
 
  if different y s
   ret path_relative s y
 end
 
 check is_str y
 
 let m require "path"
 let r m.relative y x
 
 if is_empty r
  ret y
  
 ret r
end
