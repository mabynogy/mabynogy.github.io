fn is_full x

 if is_vec x
  ret is_pos x.length
 elseif is_obj x
  forin x
   ret true
  end
  
  ret false
 end
 
 ret false
end
