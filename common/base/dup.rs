fn dup x
 check is_container x
 
 if is_arr x
  ret call x.slice
 elseif is_obj x
  let r obj
  
  merge r x
  
  ret r
 else
  stop
end
