include "../../common"
include "../../local"

fn main x:etc

 let dir "tmp/mabiven.github.io"
 let index path_concat dir "index.html"

 dir_reset dir
   
 os_system "node" "build.js" "--cv"
 file_copy "out/cv.html" index
 
 let git git_init "login-github-mabiven.txt" dir
 let url git_upload git

 if not contain x "--batch" 
  os_open "https://mabiven.github.io/"
end
