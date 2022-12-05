fn shuffle x
 check is_arr x
 
 let a arr
 
 append a x
 clear x
 
 while is_full a
  let n get_random a.length
  let v at a n
  
  remove a n
  push x v
 end
end
