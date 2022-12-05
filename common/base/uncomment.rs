fn uncomment x
 check is_str x
 
 let a arr
 
 forof split x
  let comment "//"
  let v1 delimit value is_alnum
  let v2 scan v1 is_lit
  let v3 scan v2 comment
  let parts arr
  
  forof v3
   if same value comment
    brk

   push parts value
  end
  
  if is_empty parts
   cont
  
  let s implode parts
  
  push a s
 end
 
 ret join a
end
