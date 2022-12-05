fn inspect x

 let m require "util"
 let depth null
 let compact false
 let option obj depth compact
 let s m.inspect x option
 
 log s
end
