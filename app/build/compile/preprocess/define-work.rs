fn define_work x y
 check is_obj x
 check is_str y
 
 let name at x.parameters 0
 let a1 slice x.parameters 2
 let a2 map a1 to_arg
 let dir shift a2
 let s os_work dir os_execute a2:etc
 
 log "work" s

 let v to_json s
 let operator y
 let parameters arr name v
 let children arr
 
 ret obj operator parameters children   
end
