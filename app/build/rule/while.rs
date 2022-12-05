fn rule_while x:etc

 if is_empty x
  ret rule_while "true"
  
 let v1 rule_rvalue x:etc
 let v2 paren v1
 
 ret concat "while" v2
end
