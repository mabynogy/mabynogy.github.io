fn file_append x y
 check is_str x
 check is_str y
 
 let m require "fs"

 m.appendFileSync x y
end

