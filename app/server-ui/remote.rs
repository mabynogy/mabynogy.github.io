include "../../common"
include "../../remote"

fn main x:etc

 log "ok1"
 
 let a call get_identifiers
 
 log a
 
 let o call get_globals
 
 console.log o
 
 log "ok2"
 
 stop "test"
end
