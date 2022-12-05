include "../../common"
include "../../remote"

include "to-tree.rs"
include "wp-pages.rs"
include "wp-page-count.rs"

gn main x:etc

 let pages arr
 let n perform wp_page_count

 log "count" n
  
 fornum n
  let a perform wp_pages key
  
  append pages a
 end

 tbl_sort pages "id"
 tbl_remove_column pages "content"
 
 let a to_tree pages
 
 log a
end
