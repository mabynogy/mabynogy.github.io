fn os_pipe x y z:etc
 check is_str x
 check is_str y
 
 let m require "child_process"
 let input x
 let option obj input
 let o m.spawnSync y z option

 if has o "error"
  throw o.error

 let stdout o.stdout
 let stderr o.stderr
 let out to_str stdout
 let err to_str stderr
 let s concat out err
 
 ret trim_r s
end
