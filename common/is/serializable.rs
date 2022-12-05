fn is_serializable x

 try
  JSON.stringify x
 catch
  ret true
 
 ret false
end
