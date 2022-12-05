fn decycle x

 let history arr
 
 fn duplicate x
  if is_arr x
   let r arr
   
   forof x
    if is_undef value
     cont
     
    if contain history value
     cont
     
    push history value
     
    let v duplicate value

    pop history    
    push r v
   end
   
   ret r  
  elseif is_obj x
   let r obj
   
   forin x
    let value get x key

    if is_undef value
     cont

    if contain history value
     cont

    push history value

    let v duplicate value

    pop history    
    put r key v
   end
   
   ret r
  else
   ret x
 end
 
 ret duplicate x
end
