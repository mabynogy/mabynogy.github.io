fn url_base x
 check is_url x
 
 let o new URL x
 let path o.pathname
 
 ret path_base path
end
