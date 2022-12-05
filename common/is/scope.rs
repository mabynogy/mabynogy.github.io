let scopes arr
 
fn is_scope x

 if is_empty scopes 
  let v1 "fn gn begin try catch if elseif else finally forin fornum forof while"
  let v2 split v1 " "
  
  append scopes v2
 end
 
 ret contain scopes x
end
