fn rule_catch x

 if is_undef x
  ret "catch"
  
 check is_ident x
 
 let s paren x

 ret concat "catch" s
end
