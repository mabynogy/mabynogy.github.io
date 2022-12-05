fn evaluate x
 check is_str x
 
 if same x "content" //firefox warning window.content
  ret null
 
 try
  ret eval x
 catch
  ret null
 end
end
