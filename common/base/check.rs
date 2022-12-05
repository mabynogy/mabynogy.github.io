var unsafe false

fn check x y:etc

 if unsafe
  ret
  
 if is_empty y
  if is_true x
   ret
  
  if is_fn x
   let v call x
   
   check v
   
   ret
  end
 end
 else
  if is_fn x
   let v x y:etc
   
   check v
   
   ret
  end
 end
 
 stop "check"
end
