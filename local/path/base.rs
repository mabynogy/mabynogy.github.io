fn path_base x
 check is_str x
 
 let m require "path"
 
 ret m.basename x
end
