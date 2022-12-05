fn is_etc x

 if is_tuple x
  let a split x ":"
  
  if is_pair a
   let s back a
   
   ret same s "etc"
  end
 end
 
 ret false
end
