fn os_work x y z:etc
 check is_dir x
 
 if is_str y
  ret os_work x os_system y z:etc

 check is_fn y
 
 var r null
 let dir call process.cwd 

 process.chdir x
 
 try
  assign r y z:etc
 catch e
  process.chdir dir
  
  throw e
 end

 process.chdir dir
 
 ret r
end
