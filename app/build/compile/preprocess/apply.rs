fn apply x

 if is_arr x
  let r arr
  
  forof x
   let v apply value
   
   if is_arr v
    append r v
   elseif is_obj v
    push r v
   else
    stop "apply"
  end
  
  ret r
 end
 
 if is_include x 
  let path front x.parameters
  let s JSON.parse path
   
  ret include s
 end

 if is_let_embed x  
  let ident at x.parameters 0
  let path at x.parameters 2
  let s JSON.parse path
       
  ret let_embed ident s   
 end

 if is_run x
  let a map x.parameters to_arg
  
  os_execute a:etc
  
  ret call get_nop
 end

 if is_var_run x
  ret var_run x
 
 if is_let_run x
  ret let_run x

 if is_work x
  let a map x.parameters to_arg
  let dir shift a
  
  os_work dir os_execute a:etc

  ret call get_nop
 end

 if is_var_work x
  ret var_work x
 
 if is_let_work x
  ret let_work x

 check is_obj x
 
 let operator x.operator
 let parameters x.parameters
 let children arr
   
 forof x.children
  let v apply value
  
  if is_arr v
   append children v
  elseif is_obj v
   push children v
  else
   stop "apply"
 end
   
 ret obj operator parameters children
end
