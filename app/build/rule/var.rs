fn rule_var x y:etc
 check is_ident x
 
 let v rule_rvalue y:etc
 
 ret concat "let " x "=" v ";"
end

