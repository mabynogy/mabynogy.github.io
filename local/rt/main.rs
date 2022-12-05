gn rt_main x
 check is_obj x

 let arguments dup process.argv    
 let parameters arr
 let binary shift arguments
 let script shift arguments
 let base path_base script
 let name path_name script
 let date call get_timestamp
 
 while is_full arguments
  let argument shift arguments
  
  if same argument "--unsafe"
   assign unsafe true
  elseif same argument "--verbose"
   assign con.verbose true
  elseif same argument "--silent"
   assign con.explain false
   assign con.verbose false
  elseif same argument "--reset"
   if is_file cache_path
    file_remove cache_path
  elseif is_numeric argument
   let n to_uint argument
   
   push parameters n
  else
   push parameters argument
 end
 
 explain "enter" base "at" date
 
 if is_fn main 
  main parameters:etc
 elseif is_gn main
  let iterator main parameters:etc
  
  while
   let state call iterator.next
   
   if state.done
    brk
   
   yield
  end
 else
  stop "rt-main"
end
