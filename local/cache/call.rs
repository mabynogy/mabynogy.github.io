fn cache_call x y z:etc
 check is_obj x
 check is_fn y
 
 let fn y
 let name y.name
 let parameters z

 if not has x name
  let keys arr
  let values arr
  let entry obj keys values
  
  put x name entry
 end

 let entry get x name
 let keys entry.keys
 let values entry.values
 let key to_json parameters
 let index find keys key
  
 if is_uint index
  let value at values index
  
  ret JSON.parse value
 end  
 
 let r fn z:etc
 let value to_json r
 
 push keys key
 push values value
 
 ret r
end
