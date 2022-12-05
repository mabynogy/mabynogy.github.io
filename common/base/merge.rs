fn merge x y

 if is_obj x
  if is_obj y
   Object.assign x y
   
   ret
  end
 end
   
 if is_arr x
  if is_arr y
   forof y
    if not contain x value
     push x value     
   end
   
   ret
  end
 end
   
 stop "merge"
end
