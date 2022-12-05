fn timer_deinit x
 check is_obj x
 
 let type x.type
 let id x.id
 
 if is_null type
  nop
 elseif same type "single"
  clearTimeout id
 elseif same type "many"
  clearInterval id
 else
  stop "timer-deinit"
 
 assign x.type null
 assign x.id null
end
