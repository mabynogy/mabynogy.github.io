fn is_iterable x

 try
  forin x
   ret true
  end
 catch
  ret false
 end
 
 ret true
end
