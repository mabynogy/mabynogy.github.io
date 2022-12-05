fn get_globals

 let r obj 
 
 forof call get_identifiers
  let v evaluate value

  if is_fn v
   put r value v
 end

 ret r
end
