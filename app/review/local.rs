include "../../common"
include "../../local"

include "count"

fn main x y:etc

 fn is_source x
  if not is_str x
   ret false
   
  let extensions arr "js" "rs" "txt"
  let s path_ext x
  
  ret contain extensions s
 end

 if is_undef x
  let a dir_load "src"
  let v div a.length 2
  let n trunc v
  
  ret main n y:etc
 end
 
 check is_uint x
 check is_empty y
 
 let paths dir_load "src"
 let n 200
 let review min x paths.length n
 let file paths.length 
 let rs count_file "src" "*.rs"
 let js count_file "src" "*.js"
 let txt count_file "src" "*.txt"
 let common count_sloc "src/common"
 let app count_sloc "src/app"
 let src count_sloc "src"
  
 log "review" review
 log "file" file
 log "rs" rs
 log "js" js
 log "txt" txt
 log "common" common "sloc"
 log "app" app "sloc"
 log "src" src "sloc"
  
 shuffle paths
  
 let sources filter paths is_source 
 let edits head sources review 
 
 sort edits
 each edits os_open
end
