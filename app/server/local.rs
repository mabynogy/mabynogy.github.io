include "../../common"
include "../../local"

gn main x:etc

 fn on_request x y
  check is_obj x
  check is_obj y

  let url x.url
  
  if same url "/"
   let content call html_src
   let type "text/html"
   let encoding concat type ";charset=utf-8"
   let length content.length
   let o obj

   put o "Content-Type" encoding
   put o "Content-Length" length
   
   y.writeHead 200 o
   y.end content
  elseif same url "/remote"
   work "../../.." "node" "build.js" "--server-ui"   
   let content embed "../../../out/server-ui-html.js"
   
   let type "text/javascript"
   let encoding concat type ";charset=utf-8"
   let length content.length
   let o obj

   put o "Content-Type" encoding
   put o "Content-Length" length
   
   y.writeHead 200 o
   y.end content
  else
   y.writeHead 404
   y.end
  end
 end

 let port 9000
 let url concat "http://localhost:" port
 let http http_listen on_request port

 os_open url
 
 while
  let s call terminal_peek
  
  if is_full s
   brk
   
  yield
 end
 
 http.close
end
