fn os_launch x y:etc

 let m require "child_process"
 let detached true
 let stdio "ignore"
 let option obj detached stdio
 let o m.spawn x y option
 
 o.unref
end
