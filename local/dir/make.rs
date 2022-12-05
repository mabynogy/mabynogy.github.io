fn dir_make x
 check is_str x

 let m require "fs"
 let recursive true
 let option obj recursive

 m.mkdirSync x option
end
