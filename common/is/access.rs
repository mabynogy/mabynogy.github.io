fn is_access x

 if not is_str x
  ret false

 if is_empty x
  ret false
 
 let a split x "."
 
 if is_single a
  ret false
 
 ret every a is_ident
end
