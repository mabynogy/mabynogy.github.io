fn dir_remove x
 check is_str x

 let m require "fs"
 let recursive true
 let option obj recursive

 m.rmSync x option
end
