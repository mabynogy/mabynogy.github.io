fn is_canonic x

 if not is_json x
  ret false
 
 let v1 JSON.parse x
 let v2 JSON.stringify v1
 
 ret same v2 x
end
