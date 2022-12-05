fn call x y:etc
 check is_fn x
 
 if is_gn x
  let g x y:etc
  
  while  
   let o call g.next
   
   if o.done
    ret o.value
  end
 end
 
 ret x y:etc
end
