fn path_real x
 check is_str x
 
 let m require "fs"
 
 ret m.realpathSync x
end
