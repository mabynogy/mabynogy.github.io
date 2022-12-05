fn let_embed x y
 check is_str x
 check is_str y
 
 let path path_real y

 log "embed" path
 
 let content file_load path
 let s to_json content
 
 let operator "let"
 let parameters arr x s
 let children arr
 
 ret obj operator parameters children  
end
