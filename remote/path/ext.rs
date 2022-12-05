fn path_ext x
 check is_str x
 
 let base path_base x
 let a split base "."
 
 if is_single a
  ret ""
  
 let s back a
 
 ret to_lower s
end
