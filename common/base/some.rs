fn some x y
 check is_vec x
 check is_fn y
 
 if is_str x
  forof x
   if y value
    ret true
  end
  
  ret false
 elseif is_arr x
  ret x.some y
 else
  stop "some"
end
