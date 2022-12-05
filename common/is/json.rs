fn is_json x

 if not is_str x
  ret false
  
 try 
  JSON.parse x
 catch
  ret false
 end

 ret true
end
