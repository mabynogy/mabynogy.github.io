fn node_latest_url 

 let page elinks "https://nodejs.org/dist/latest/"
 let links page.links
 
 forof links
  let o new URL value
  let path o.pathname
  let base path_base path
  
  if match base "node-*-linux-x64.tar.xz"
   ret value   
 end
end
