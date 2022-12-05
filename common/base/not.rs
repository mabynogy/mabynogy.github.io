fn not x y:etc

 if is_empty y
  if is_bool x
   ret inline "!x"
   
  if is_fn x
   let v call x
   
   ret not v
  end
 else
  if is_fn x
   let v x y:etc
   
   ret not v
  end
 end

 stop "not"
end
