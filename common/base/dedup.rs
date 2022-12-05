fn dedup x
 check is_arr x
 
 let a dup x
 
 clear x
 
 forof a
  if contain x value
   cont
   
  push x value
 end
end
