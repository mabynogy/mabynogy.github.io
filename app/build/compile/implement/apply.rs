fn apply x

 fn get_rvalue x y 
  check is_arr x
  
  if is_undef y
   ret get_rvalue x 0
  
  check is_uint y
  
  let r slice x y
  
  if is_single r
   let first front r
   
   if is_name first
    ret arr "call" first
  end
  
  ret r
 end

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

 if is_perform x
  let r arr
  let parameters x.parameters
  let rvalue get_rvalue parameters
  
  let a02 write r "begin"
  let a03 write a02 "let" "_iterator" rvalue:etc
  let a04 write a02 "while"
  let a05 write a04 "let" "_state" "call" "_iterator.next"
  let a06 write a04 "if" "_state.done"
  let a07 write a06 "brk"
  let a08 write a04 "yield"
  
  ret r
 end
 
 if is_var_perform x
  let r arr
  let parameters x.parameters
  let ident at parameters 0
  let rvalue get_rvalue parameters 2
  //let rvalue slice parameters 2
  
  let a01 write r "var" ident "null"
  let a02 write r "begin"   
  let a03 write a02 "let" "_iterator" rvalue:etc
  let a04 write a02 "while"
  let a05 write a04 "let" "_state" "call" "_iterator.next"
  let a06 write a04 "if" "_state.done"
  let a07 write a06 "assign" ident "_state.value"
  let a08 write a06 "brk"
  let a09 write a04 "yield"
  
  ret r
 end

 if is_let_perform x
  let r arr
  let parameters x.parameters
  let ident at parameters 0
  let rvalue get_rvalue parameters 2
  //let rvalue slice parameters 2
  
  //~ console.log
  //~ console.log parameters
  //~ console.log rvalue

  inc last_result
  
  let result concat "_result_" last_result
  
  let a01 write r "var" result "null"
  let a02 write r "begin"   
  let a03 write a02 "let" "_iterator" rvalue:etc
  let a04 write a02 "while"
  let a05 write a04 "let" "_state" "call" "_iterator.next"
  let a06 write a04 "if" "_state.done"
  let a07 write a06 "assign" result "_state.value"
  let a08 write a06 "brk"
  let a09 write a04 "yield"
  let a10 write r "let" ident result
  
  ret r
 end

 if is_assign_perform x
  let r arr
  let parameters x.parameters
  let ident at parameters 0
  let rvalue get_rvalue parameters 2
  //let rvalue slice parameters 2
  
  let a01 write r "assign" ident "null"
  let a02 write r "begin"   
  let a03 write a02 "let" "_iterator" rvalue:etc
  let a04 write a02 "while"
  let a05 write a04 "let" "_state" "call" "_iterator.next"
  let a06 write a04 "if" "_state.done"
  let a07 write a06 "assign" ident "_state.value"
  let a08 write a06 "brk"
  let a09 write a04 "yield"
  
  ret r
 end

 if is_ret_perform x
  let r arr
  let parameters x.parameters
  let rvalue get_rvalue parameters 1
  //let rvalue slice parameters 1

  inc last_result
  
  let result concat "_result_" last_result
  
  let a01 write r "var" result "null"
  let a02 write r "begin"   
  let a03 write a02 "let" "_iterator" rvalue:etc
  let a04 write a02 "while"
  let a05 write a04 "let" "_state" "call" "_iterator.next"
  let a06 write a04 "if" "_state.done"
  let a07 write a06 "assign" result "_state.value"
  let a08 write a06 "brk"
  let a09 write a04 "yield"
  let a10 write r "ret" result
  
  ret r
 end
 
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
