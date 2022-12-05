include "../../common"
include "../../remote"

//http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

gn main x:etc

 fornum 53
  let b call scroll_sticky
  
  log "a" b key
  
  yield
 end
  
 perform pause 3

 fornum 3
  let b call scroll_sticky
  
  log "b" b key
  
  yield
 end

 perform pause 3

 fornum 3
  let b call scroll_sticky
  
  log "c" b key
  
  yield
 end

 log "ok" 
 
end
