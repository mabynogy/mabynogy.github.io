fn path_dir x
 check is_str x
 
 let m require "path"
 
 ret m.dirname x
end
