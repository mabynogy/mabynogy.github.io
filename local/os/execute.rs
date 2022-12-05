fn os_execute x y:etc
 check is_str x
 
 trace "execute" x y:etc
 
 let m require "child_process"
 let o m.spawnSync x y
 
 if has o "error"
  throw o.error
 
 let stdout o.stdout
 let stderr o.stderr

 let out to_str stdout
 let err to_str stderr
 let s concat out err
 
 ret trim_r s
end
