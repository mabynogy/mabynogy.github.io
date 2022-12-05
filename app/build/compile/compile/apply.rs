fn apply x
 check is_obj x
 
 let operator x.operator
 let parameters x.parameters

 log "apply" operator parameters:etc
 
 if has rules operator
  let fn get rules operator
  let s fn parameters:etc
 
  check is_fn fn
  check is_str s
    
  ret split s
 end

 let s rule_call operator parameters:etc

 check is_str s
  
 ret split s
end
