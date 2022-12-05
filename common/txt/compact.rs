fn txt_compact x
 check is_str x
 
 let inputs split x
 let outputs arr
 
 forof inputs
  let s trim value
  
  if is_full s
   push outputs s
 end
 
 ret join outputs
end
