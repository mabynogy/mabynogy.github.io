fn cmp x y

 if is_null x
  if is_null y
   if inline "x>y"
    ret 1
   elseif inline "x<y"
    ret -1
   else
    ret 0
  end
 end

 if is_bool x
  if is_bool y
   if inline "x>y"
    ret 1
   elseif inline "x<y"
    ret -1
   else
    ret 0
  end
 end

 if is_num x
  if is_num y
   if inline "x>y"
    ret 1
   elseif inline "x<y"
    ret -1
   else
    ret 0
  end
 end

 if is_str x
  if is_str y
   if inline "x>y"
    ret 1
   elseif inline "x<y"
    ret -1
   else
    ret 0
  end
 end

 if is_arr x
  if is_arr y
   forin x
    let index to_int key
    
    if inline "index>=y.length"
     ret -1

    let left at x index
    let right at y index
    let r cmp left right
    
    if different r 0
     ret r
   end
   
   ret 0
  end
 end

 if is_obj x
  if is_obj y
   let xkeys get_keys x
   let ykeys get_keys y
   let r cmp xkeys ykeys
   
   if different r 0
    ret r
    
   let xvalues get_values x
   let yvalues get_values y
   
   ret cmp xvalues yvalues
  end
 end
 
 stop "cmp" 
end
