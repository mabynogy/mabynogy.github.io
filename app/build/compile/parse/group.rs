fn group x

 let r arr
 let lines split x
 
 forof lines
  if is_blank value
   cont
   
  log "group" value
  
  let s trim_l value
  let indent sub value.length s.length
  let v1 delimit s is_alnum
  let v2 scan v1 is_term
  let parameters exclude v2 is_blank
  let first front parameters

  check every parameters is_term
  
  if is_ident first
   shift parameters
   
   let operator first
   let o obj indent operator parameters
   
   push r o
  elseif is_access first
   let operator "call"
   let o obj indent operator parameters
   
   push r o
  else
   stop
 end
 
 ret r
end
