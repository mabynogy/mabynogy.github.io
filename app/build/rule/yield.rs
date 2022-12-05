fn rule_yield x:etc

 if is_empty x
  ret "yield"  

 let s rule_rvalue x:etc
 
 ret concat "yield " s
end
