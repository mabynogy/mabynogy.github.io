fn get_traces x 

 fn is_friend x
  if is_camel x
   ret false

  if is_ident x
   ret true
   
  if is_snake x
   ret true
   
  if is_access x
   let a split x "."
   
   if every a is_friend
    ret true
  end
  
  ret false
 end

 fn is_foreign x
  ret not is_friend x
 end

 let r arr
 let a get_calls x
 let lines split env.source
 
 forof a
  let name value.name

  if is_foreign name
   cont
   
  let line value.line
  let index sub line 1 env.source_offset
  
  if is_neg index
   cont
   
  if gte index lines.length
   cont
   
  let code at lines index
  let o dup value
    
  assign o.code code 
   
  push r o
 end

 ret r
end
