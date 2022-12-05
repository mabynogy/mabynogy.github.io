fn dir_copy x y
 check is_dir x
 check is_str y
 
 let m require "fs"
 let recursive true
 let option obj recursive

 m.cpSync x y option
end
