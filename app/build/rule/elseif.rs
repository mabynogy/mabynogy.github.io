fn rule_elseif x:etc

 let v1 rule_rvalue x:etc
 let v2 paren v1
 
 ret concat "else if" v2
end
