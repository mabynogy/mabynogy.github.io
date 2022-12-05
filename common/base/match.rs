fn match x y z
 check is_str x
 check is_str y
 
 if is_undef z
  let a arr
  
  ret match x y a
 end
 
 check is_arr z
 
 let s01 replace y "\\?" "{question}"
 let s02 replace s01 "\\*" "{star}"
 let s03 replace s02 "\\+" "{plus}"
 let s04 replace s03 "\\." "{dot}"
 let s05 replace s04 "?" "(.)"
 let s06 replace s05 "*" "(.*)"
 let s07 replace s06 "+" "(.+)"
 let s08 replace s07 "{question}" "\\?"
 let s09 replace s08 "{star}" "\\*"
 let s10 replace s09 "{plus}" "\\+"
 let s11 replace s10 "{dot}" "\\."
 let s12 concat "^" s11 "$"
 
 let o new RegExp s12 "g"
 let result o.exec x
 
 if is_null result
  ret false
  
 forin result
  if is_numeric key
   let value get result key
   
   push z value
  end
 end
 
 shift z
 
 ret true 
end
