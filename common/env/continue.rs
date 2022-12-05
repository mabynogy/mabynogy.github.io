fn env_continue x
 check is_obj x
 
 env_tick x
  
 if is_full x.tasks
  let timer call timer_init
  let fn partial env_continue x
 
  timer_fire timer fn
 end
end
