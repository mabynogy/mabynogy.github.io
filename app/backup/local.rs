include "../../common"
include "../../local"

fn main x:etc

 let dir "tmp/source"
 let src path_concat dir "src"
 let app path_concat src "app"
 
 dir_reset dir
 dir_copy "src" src
 file_copy "build.js" dir
 
 let git git_init "login-github-mabynogy.txt" dir
 let url git_upload git

 dir_remove dir

 if not contain x "--batch" 
  os_open url
end
