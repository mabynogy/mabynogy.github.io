include "../../common"
include "../../remote"

fn main x:etc

 fn get_pages 
  let r arr
  
  work "../../.." "node" "build.js" "--all-remote" "--no-index"
  work "../../.." "node" "build.js" "--make-fs" "--run" "out" 
  
  let content embed "../../../data/fs.json"
  let paths JSON.parse content
 
  forof paths
   let ext path_ext value
   
   if same ext "html"
    push r value
   end
  end
  
  ret r
 end
 
 forof call get_pages
  let div document.createElement "div"
  let a document.createElement "a"
  
  assign a.href value
  assign a.textContent value
  
  div.appendChild a
  document.body.appendChild div
 end
 
 log "ok" 
end
