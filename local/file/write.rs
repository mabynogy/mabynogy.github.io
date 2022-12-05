fn file_write x y
 check is_str x
 check is_str y
 
 let m require "fs"

 m.writeFileSync x y
end

