fn rule_put x y z:etc
 check is_name x
 check is_val y

 let v rule_rvalue z:etc 
 let s bracket y 
 
 ret concat x s "=" v
end
