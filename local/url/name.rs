fn url_name x
 check is_url x
 
 let o new URL x
 let path o.pathname
 
 ret path_name path
end
