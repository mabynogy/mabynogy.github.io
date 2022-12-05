fn rule_div x y:etc
 check is_name x
 
 let v rule_rvalue y:etc

 ret concat x "/=" v
end
