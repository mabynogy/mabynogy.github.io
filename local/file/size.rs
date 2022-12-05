fn file_size x
 check is_str x

 let m require "fs"
 let o m.statSync x
 
 ret o.size
end
