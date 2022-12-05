fn parse x
 check is_str x
 
 include "parse" 
 
 let v1 uncomment x
 let v2 group v1
 let v3 arr
 
 while is_full v2
  let node fold v2
  
  push v3 node
 end
 
 ret normalize v3
end
