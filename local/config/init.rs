fn config_init x
 check is_str x

 let r obj
 let path file_locate x
 let s file_load path
 let content txt_normalize s
 let lines split content
 
 forof lines
  let s trim value
  
  if is_empty s
   cont
  
  let a split s " "
  let k shift a
  let v join a
  
  put r k v
 end
 
 ret r
end
