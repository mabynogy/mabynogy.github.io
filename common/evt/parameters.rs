fn evt_parameters x
 check is_obj x

 let data x.data
 let r arr

 forin data
  let value get data key
  let index to_int key
  
  if is_zero index
   if is_txt value
    let s to_json value
    
    push r s
   else
    push r value
  elseif is_undef value
   push r "undef"
  elseif is_label value
   push r value
  elseif is_lit value
   push r value
  elseif is_str value
   let s to_json value
   
   push r s
  else
   push r value
 end
 
 ret r 
end
