fn tbl_convert x

 if is_tbl x
  ret x
 elseif is_arr x
  let r arr
  let keys arr    
  
  forof x
   if is_obj value
    let a get_keys value
    
    merge keys a
   elseif not contain keys "value"
    push keys "value"   
  end
  
  forof x
   let o zip keys
   
   if is_obj value    
    forin value
     let v get value key
     
     put o key v
    end
   else
    put o "value" value
   end
   
   push r o
  end
  
  ret r
 elseif is_obj x
  let r arr
  
  forin x
   let value get x key
   let o obj key value
   
   push r o
  end
  
  ret r
 else
  stop "tbl-convert"
end
