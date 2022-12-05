fn is_empty x

 if is_vec x
  ret is_zero x.length
 elseif is_obj x
  forin x
   ret false
  end
  
  ret true
 end
 
 ret false
end
