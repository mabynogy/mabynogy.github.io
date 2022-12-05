fn os_spawn x y:etc

 let m require "child_process"  
 let o m.spawn x y
 let pid o.pid
 let stdin o.stdin
 let stdout o.stdout
 let stderr o.stderr
 
 ret obj pid stdin stdout stderr
end
