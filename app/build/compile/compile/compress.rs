fn compress x
 check is_str x
 
 let output arr
 let input split x
 
 while is_full input
  let line shift input

  if is_empty output
   push output line
  elseif is_punct line
   let s1 back output
   let s2 concat s1 line
   
   pop output
   push output s2
  else
   push output line
 end
 
 ret join output
end
