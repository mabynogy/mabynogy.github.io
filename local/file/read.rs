fn file_read x
 check is_str x
 
 let m require "fs"
 let o m.readFileSync x
 
 ret to_str o
end

