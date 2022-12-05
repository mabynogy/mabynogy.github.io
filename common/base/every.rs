fn every x y
 check is_vec x
 check is_fn y

 if is_str x
  forof x
   if y value
    cont
   
   ret false
  end
  
  ret true
 elseif is_vec x
  ret x.every y
 else
  stop "every"
end
