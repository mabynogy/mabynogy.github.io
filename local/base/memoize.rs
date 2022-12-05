let cache obj

fn memoize x
 check is_fn x
 
 let fn x
 
 fn call x:etc
  ret cache_call cache fn x:etc
 end
 
 ret val call
end
