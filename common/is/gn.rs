fn is_gn x

 let v typeof x
 
 if different v "function"
  ret false
  
 let s x.constructor.name
 
 ret same s "GeneratorFunction"
end
