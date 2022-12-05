fn to_fixed x y
 check is_num x
 
 if is_undef y
  ret to_fixed x 2
  
 check is_uint y
  
 let s x.toFixed y
 
 if is_zero y
  ret s
 
 let a explode s
 
 while is_full a
  let v back a
  
  if same v "0"
   pop a
  else
   brk
 end
 
 let v back a
  
 if same v "."
  pop a
 
 ret implode a
end
