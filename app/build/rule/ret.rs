fn rule_ret x:etc

 if is_empty x
  ret "return"
  
 let v rule_rvalue x:etc
 
 ret concat "return " v
end

