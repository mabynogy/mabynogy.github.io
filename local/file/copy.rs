fn file_copy x y
 check is_file x
 check is_str x
  
 if is_dir y
  let base path_base x
  let path path_concat y base
  
  ret file_copy x path
 end
 
 let m require "fs"

 m.copyFileSync x y
end

