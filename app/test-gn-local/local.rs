include "../../common"
include "../../local"

gn main x:etc

 fornum 42
  log key
  
  yield
 end
 
 log "ok"
end
