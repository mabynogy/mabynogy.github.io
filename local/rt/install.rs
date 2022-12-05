fn rt_install x
 check is_obj x

 fn get_cache
  let origin call dir_origin  
  let tmp path_concat origin "tmp"
  let dir dir_locate "tmp" tmp
  
  ret path_concat dir "cache.txt"
 end
 
 fn on_monitor x y
  check is_obj x
  check is_str y
  
  let stack get_stack x  
  
  log "monitor" x.message y
  log stack
 end

 fn on_exception x y
  check is_obj x
  check is_str y
  
  let frames get_frames x
  let s join frames
  
  log "exception" y x.message
  log "frames" s
  
  process.exit 1
 end
 
 fn on_exit
  let path at process.argv 1
  let base path_base path

  cache_update cache cache_path

  pcall beep
 end

 let stdin process.stdin
 let cache_path call get_cache
 
 if stdin.isTTY
  stdin.setRawMode true
 
 if is_file cache_path
  cache_load cache cache_path
 
 process.on "uncaughtExceptionMonitor" on_monitor
 process.on "uncaughtException" on_exception
 process.on "exit" on_exit

 assign x.source call get_source
 assign x.source_offset call get_source_offset 
end
