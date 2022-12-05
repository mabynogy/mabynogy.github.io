gn xhr_execute x
 check is_obj x

 fn get_url x
  check is_obj x
  
  let url x.url
  let parameters x.parameters
  
  if is_empty parameters
   ret url

  let a arr
  
  forin parameters
   let value get parameters key
   let v encodeURIComponent value
   let s concat key "=" value
   
   push a s
  end
  
  let s join a "&"
  
  ret concat url "?" s
 end
 
 fn get_headers x
  check is_obj x
  
  let r obj
  let s1 call x.getAllResponseHeaders
  let s2 trim_r s1
  let lines split s2
  
  forof lines
   let parts split value ":"
   let key shift parts
   let s1 join parts ":"
   let s2 trim s1
   
   if is_numeric s2
    let n to_num s2

    put r key n
   else   
    put r key s2
  end
  
  ret r
 end
 
 fn on_load x
  check is_obj x
  
  assign x.loaded true
 end
 
 let loaded false
 let context obj loaded
 let url get_url x
 let xhr new XMLHttpRequest
 let callback partial on_load context
 
 xhr.open x.method url
 assign xhr.onload callback
 xhr.send
 
 while not context.loaded
  yield
 end
 
 let headers get_headers xhr
 let s to_str xhr.response 
 
 if is_json s
  let response JSON.parse s
  
  ret obj headers response
 end
 
 let response s
 
 ret obj headers response
end
