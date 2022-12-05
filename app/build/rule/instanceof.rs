fn rule_instanceof x y:etc
 check is_ident x
 
 let v rule_rvalue y:etc
 
 ret concat x " instanceof " v
end
