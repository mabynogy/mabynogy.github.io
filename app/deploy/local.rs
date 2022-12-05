include "../../common"
include "../../local"

fn main x:etc

 os_system "node" "build.js" "--backup"
 os_system "node" "out/backup.js" "--batch"
 os_system "node" "build.js" "--all"
 
 let dir "tmp/mabynogy.github.io"
 //let app path_concat dir "app"
 
 dir_reset dir
 
 forof dir_match "*/out/*.html"
  file_copy value dir
 end
 
 dir_copy "src" dir
  
 os_system "node" "build.js" "--make-fs" "--run" dir 
 file_copy "data/fs.json" dir
 
 let git git_init "login-github-mabynogy.txt" dir
 let url git_upload git

 if not contain x "--batch" 
  os_open "https://mabynogy.github.io/"
end
