fn rule_let x y:etc
 check is_ident x
 
 let v rule_rvalue y:etc
 
 ret concat "const " x "=" v ";"
end

