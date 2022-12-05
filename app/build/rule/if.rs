fn rule_if x:etc

 let v1 rule_rvalue x:etc
 let v2 paren v1
 
 ret concat "if" v2
end
