fn preprocess x
 check is_str x
 
 include "preprocess"
 
 let cache_parse memoize parse
 let a cache_parse x
 let r apply a
 
 if is_obj r
  ret arr r
   
 ret r
end
