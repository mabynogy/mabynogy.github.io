fn curl_execute x
 check is_obj x

 fn apply_get x y z
  check is_str x
  check is_obj y
  check is_obj z

  if is_empty y
   ret apply z x
  
  let a arr
  
  forin y
   let value get y key
   let v encodeURIComponent value
   let s concat key "=" value
   
   push a s
  end
  
  let s join a "&"  
  let url concat x "?" s
  
  ret apply z url
 end

 fn apply_post x y z
  check is_str x
  check is_obj y
  check is_obj z
  
  let data to_json y
  
  ret apply z x "--data" data
 end
 
 fn apply x y:etc
  check is_obj x
  
  let parameters arr
  
  push parameters "--silent"
  push parameters "--include"
  push parameters "--globoff"
  
  if is_full x
   forin x
    let value get x key    
    let s concat key ": " value
    
    push parameters "--header"
    push parameters s
   end
  end
  
  append parameters y
  
  let s1 os_execute "curl" parameters:etc
  let s2 txt_normalize s1
  let a split s2
  let status shift a
  let headers obj 
 
  while is_full a
   let s shift a
   
   if is_empty s
    brk
   
   let separator ": "
   let parts split s separator
   let key shift parts
   let value join parts separator
    
   put headers key value
  end

  let s join a
  
  if is_json s
   let body JSON.parse s
   
   ret obj status headers body
  end
  
  let body s
  
  ret obj status headers body
 end
 
 let method x.method
 let url x.url
 let parameters x.parameters
 let headers x.headers
 
 if same method "get"
  ret apply_get url parameters headers
 elseif same method "post"
  ret apply_post url parameters headers
 else
  stop "curl-execute"
end
