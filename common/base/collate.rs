fn collate x y z
 check is_arr x
 
 if is_undef y
  ret collate x is_alnum z
  
 check is_fn y
 
 if is_undef z
  ret collate x y " "
 
 let a arr
 
 forof x
  if is_empty value
   cont

  if is_empty a
   push a value
   
   cont
  end
  
  let s back a
  let cs back s
  let cv front value
  let bs y cs
  let bv y cv
  
  if and bs bv
   push a z

  push a value
 end
 
 ret implode a
end
