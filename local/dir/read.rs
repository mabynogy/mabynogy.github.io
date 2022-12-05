fn dir_read x
 check is_str x
 
 let r arr
 let m require "fs"
 let path path_real x

 forof m.readdirSync path
  let s path_concat path value
  
  push r s
 end
 
 sort r

 ret r
end
