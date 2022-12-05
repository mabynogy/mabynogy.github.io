fn cache_normalize x
 check is_obj x
 
 let r obj
 
 forin x
  let value get x key
  
  if is_full value
   put r key value
  end
 end
 
 ret r
end
