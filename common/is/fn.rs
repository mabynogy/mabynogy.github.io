fn is_fn x

 if is_gn x
  ret false
  
 let v typeof x
 
 ret same v "function"
end
