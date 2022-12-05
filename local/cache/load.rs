fn cache_load x y
 check is_obj x
 check is_str y
 
 let content file_load y
 let entries JSON.parse content
  
 merge x entries
end
