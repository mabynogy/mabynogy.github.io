gn rt_main x
 check is_obj x

 if is_fn main
  main 
 elseif is_gn main
  let iterator call main
  
  while
   let state call iterator.next
   
   if state.done
    brk
   
   yield
  end
 else
  stop "rt-main"
end

