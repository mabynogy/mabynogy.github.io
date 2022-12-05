fn rule_arr x:etc
 check every x is_term
 
 let v1 map x get_parameter
 let v2 join v1 ","
 
 ret bracket v2
end
