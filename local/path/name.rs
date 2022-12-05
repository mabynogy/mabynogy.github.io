fn path_name x
 check is_str x
 
 let m require "path"
 let o m.parse x
 
 ret o.name
end
