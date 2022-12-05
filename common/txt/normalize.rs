fn txt_normalize x
 check is_str x
 
 let inputs split x
 let outputs arr
 
 while is_full inputs
  let s1 shift inputs
  let s2 replace s1 "\t" " "
  let s3 trim_r s2
    
  if is_full s3
   push outputs s3
   
   cont
  end
  
  if is_empty outputs
   cont

  let previous back outputs
  
  if is_full previous
   push outputs ""
 end
 
 let s join outputs
 
 ret trim_r s
end
