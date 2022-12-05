let rules obj

fn compile x
 check is_str x
 
 include "compile"
 
 if is_empty rules
  let o get_fns "rule"
  
  merge rules o
 end
 
 let a arr

 forof implement x
  let s translate value

  if is_full s
   push a s
 end
 
 let s join a
 
 ret compress s
end
