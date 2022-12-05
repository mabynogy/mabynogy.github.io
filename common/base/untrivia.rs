fn untrivia x
 check is_str x
 
 let s uncomment x
 let a arr
 
 forof split s
  let s trim value
  
  if is_empty s
   cont

  let v1 delimit s is_alnum
  let v2 delimit v1 is_space
  let v3 scan v2 is_lit
  let v4 exclude v3 is_space
  let v5 collate v4
  
  push a v5
 end
 
 ret join a
end
