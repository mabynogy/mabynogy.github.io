include "../../common"
include "../../local"

include "node-latest-url.rs"

fn main x:etc
 
 let url call node_latest_url
 let base url_base url
 let tar url_name url
 let dir path_name tar
 
 let tmp "tmp"
 let node_etc front process.argv
 let node_bin path_concat dir "bin/node"
 
 os_work tmp "wget" url
 os_work tmp "xz" "-d" base
 os_work tmp "tar" "-xf" tar 
 os_work tmp "sudo" "cp" "-f" node_bin node_etc
 os_work tmp file_remove tar 
 os_work tmp dir_remove dir
 
 let before process.version
 let after os_execute "node" "-v" 
 
 if same before after
  log "version" before
 else
  log "update" before after  
end
