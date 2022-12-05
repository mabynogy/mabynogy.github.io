fn con_print x y
 check is_obj x
 check is_obj y
 
 fn get_pid
  let v1 process.pid
  let v2 to_hexa v1
  let v3 pad_r v2 6
  
  ret concat "@" v3
 end

 let pid call get_pid
 let order evt_order y
 let time con_time x y
 let parts arr pid order time 
 let prompt join parts " "
 let parameters evt_parameters y

 unshift parameters prompt
 
 if every parameters is_str
  let s1 join parameters " "
  let s2 head s1 x.width
  
  console.log s2
  
  ret
 end

 console.log parameters:etc
end
