fn define_run x y
 check is_obj x
 check is_str y
 
 let name at x.parameters 0
 let a1 slice x.parameters 2
 let a2 map a1 to_arg
 let s os_execute a2:etc

 log "run" s

 let v to_json s
 let operator y
 let parameters arr name v
 let children arr
 
 ret obj operator parameters children   
end
