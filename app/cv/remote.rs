include "../../common"
include "../../remote"

fn get_records x
 check is_str x
 
 let r arr
 let lines split x
 
 var record obj
 
 while is_full lines
  let line shift lines
  
  if is_empty line
   if is_full record
    push r record
    assign record obj
   end
    
   cont
  end
  
  let parts split line " "
  let key shift parts
  let value join parts " "
  
  put record key value
 end
 
 if is_full record
  push r record
 
 ret r
end

gn main x:etc
 fn get_jobs
  let s embed "jobs.txt"
  let r get_records s
  
  forof r
   let s concat value.duration " années"
   
   assign value.duration s 
  end
  
  //tbl_order r
  //tbl_pad_l r "order"
  
  ret r
 end
 
 log "Bienvenue sur le site de Marc Abiven"
 log
 log "Voici mon CV:"
 log
 log "Développeur Web et Système"
 log

 let jobs call get_jobs
 
 log jobs
 
 log "done"
end
