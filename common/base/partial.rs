fn partial x y:etc
 check is_fn x
 
 let fn x
 let parameters y
 
 inline "function r(...x)"
 inline "{"
 inline " return fn(...parameters,...x)"
 inline "}"
 
 //~ fn r x:etc
  //~ ret fn parameters:etc x:etc
 //~ end
 
 ret r
end
