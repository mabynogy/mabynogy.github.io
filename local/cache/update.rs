fn cache_update x y
 check is_obj x
 check is_str y

 cache_invalidate x

 if is_file y
  let cache obj
  
  cache_load cache y
  cache_merge x cache
 end
 
 let o cache_normalize x
   
 cache_save o y
end
