fn get_calls x

 fn get_call x
  check is_str x
  
  let v1 delimit x is_alnum
  let v2 scan v1 is_term
  let a exclude v2 is_blank
  
  if is_empty a
   ret null
   
  var name shift a
  
  if call is_firefox
   if same name "@"
    assign name "global"
   end
  end

  if not is_name name
   ret null
   
  if call is_chrome
   if is_full a
    let s front a
    
    if same s ":"
     assign name "global"
    end
   end
  end
   
  let line get_line a    
  
  if is_null line
   ret null
   
  ret obj name line
 end
 
  ret r
 end
 
 fn get_line x
  let a dup x
  let offsets arr
  
  reverse a
  
  forof a
   if is_numeric value
    let n JSON.parse value
    
    push offsets n
   end
  end
  
  if not is_many offsets
   ret null
  
  ret at offsets 1
 end
 
 let r arr
 
 forof get_frames x
  let o get_call value
  
  if not is_null o
   push r o
 end
 
 ret r
end
