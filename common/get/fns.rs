fn get_fns x
 check is_str x
 
 let r obj
 let o call get_globals

 forin o
  let value get o key
  
  if is_fn value
   let words split key "_"
   
   if is_single words
    cont
   
   let first shift words
  
   if same first x
    let name join words "_"
    
    put r name value
   end
  end
 end

 ret r 
end
