fn cache_save x y
 check is_obj x
 check is_str y
 
 let content to_json x

 file_save y content
end
