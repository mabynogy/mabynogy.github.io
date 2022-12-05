fn file_remove x
 check is_str x
 
 let m require "fs"
 
 m.unlinkSync x
end
