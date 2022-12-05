include "../../common"
include "../../remote"

fn main x:etc

 assign window.devicePixelRatio 1

 let s navigator.userAgent
 let firefox call is_firefox
 let pixel_ratio devicePixelRatio
 
 log "user-agent" s 
 log "firefox" firefox
 log "pixel_ratio" pixel_ratio
 
 let a arr
 
 fornum 2
  fornum 10
   push a key
   
   let s repeat "-" 9
   
   push a s   
  end
 end
 
 let line implode a
 
 log line
end
