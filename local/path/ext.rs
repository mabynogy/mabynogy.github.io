fn path_ext x
 check is_str x
 
 let m require "path"
 let v1 m.extname x
 let v2 strip_l v1 "."
 
 ret to_lower v2
end
