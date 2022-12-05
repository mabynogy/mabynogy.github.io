fn cache_merge x y
 check is_obj x
 check is_obj y
 
 forin y
  let name key
  let yentry get y name
  
  if has x name
   let ykeys yentry.keys
   let yvalues yentry.values
   let xentry get x name
   let xkeys xentry.keys
   let xvalues xentry.values
   
   forin ykeys
    let k get ykeys key
    let v get yvalues key
    let index find xkeys k
    
    if is_uint index
     cont
     
    push xkeys k
    push xvalues v
   end
  else
   put x name yentry
 end
end
