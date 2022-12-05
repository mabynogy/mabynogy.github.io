fn is_num x

 if Number.isNaN x
  ret false

 if not Number.isFinite x
  ret false
  
 let s typeof x
 
 ret same s "number"
end
