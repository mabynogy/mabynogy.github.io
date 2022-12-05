fn os_system x y:etc
 check is_str x
 
 trace "system" x y:etc
 
 let m require "child_process"
 let stdio "inherit"
 let option obj stdio
 let o m.spawnSync x y option
 
 ret o.status
end
