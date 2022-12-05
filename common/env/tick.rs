fn env_tick x
 check is_obj x
 
 let tasks x.tasks
 let task front tasks

 if is_fn task
  task x
  
  shift tasks
 elseif is_gn task
  let iterator task x
  
  shift tasks
  unshift tasks iterator
  
  env_tick x
 elseif is_iterator task
  let state task.next x
  
  if state.done
   shift tasks
 else
  stop "env-tick"
end
