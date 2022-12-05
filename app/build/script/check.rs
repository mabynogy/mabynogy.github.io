fn script_check x

 trace "check" x
 
 let argv process.argv
 let binary front argv
 let s os_execute binary "-c" x
  
 if is_full s
  log "out" s
  
  ret false
 end
 
 ret true
end
