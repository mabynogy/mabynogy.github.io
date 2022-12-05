fn con_mute x y
 check is_obj x
 check is_fn y
 
 fn show x
  forof x.history
   let context value
   
   forof context
    con_print x value
   end
  end
  
  clear x.history
 end
 
 if x.verbose
  ret y
 
 let con x
 let fn y
 
 fn call x:etc
  var r null
  let context arr
  
  push con.history context
 
  try
   assign r fn x:etc
  catch e
   show con
   
   throw e
  end

  pop con.history
  
  ret r
 end
 
 ret val call
end
