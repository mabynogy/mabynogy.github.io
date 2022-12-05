include "../../common"
include "../../local"

include "app"
include "code"
include "compile"
include "get"
include "is"
include "rule"
include "script"

include "sh-inline.rs"

fn main x:etc

 fn get_app x
  if not is_str x
   ret null
   
  let prefix "--"
   
  if not match_l x prefix
   ret null
   
  let r strip_l x prefix
  
  if not is_app r
   ret null
  
  ret r
 end

 fn get_app_no x
  if not is_str x
   ret null

  let prefix "--no-"
   
  if not match_l x prefix
   ret null
   
  let r strip_l x prefix
  
  if not is_app r
   ret null
  
  ret r
 end
 
 if not is_dir "out"
  dir_make "out"
 
 let arguments dup x
 let parameters arr
 let apps arr
 let apps_no arr
 var option_run false
 
 while is_full arguments
  let argument shift arguments  
  let app get_app argument
  let app_no get_app_no argument
  
  if is_str app
   push apps app
  elseif is_str app_no
   push apps_no app_no
  elseif same argument "--all"
   let a call get_apps
  
   append apps a
  elseif same argument "--all-local"
   let a call get_local_apps
  
   append apps a
  elseif same argument "--all-remote"
   let a call get_remote_apps
  
   append apps a
  elseif same argument "--run"
   assign option_run true   
   append parameters arguments
   clear arguments
  else
   push parameters argument
 end
 
 if is_empty apps
  forof call get_apps
   let flag concat "--" value
   
   log "flag" flag
  end
  
  ret
 end
 
 forof apps
  if contain apps_no value
   log "skip" value
  else
   log "build" value
    
   app_build value
  end
 end
  
 if not option_run
  ret
  
 forof apps
  if not contain apps_no value
   log "run" value

   app_run value parameters:etc
  end
 end
end
