fn is_chrome

 if call is_local 
  ret false
  
 let s to_lower navigator.userAgent
 
 ret contain s "chrome"
end
