gn rt_install x
 check is_obj x

 fn on_error x y z a b
  check is_str x
  check is_str y
  check is_num z
  check is_num a
  check is_obj b
  
  let stack get_stack b
  
  if same b.message x 
   log "error" x
  else  
   log "error" b.message x 

  log stack

  let frames get_frames b
  let s join frames

  log "frames" s
  
  return true
 end
 
 assign window.onerror on_error 

 assign x.source perform get_source
 assign x.source_offset call get_source_offset 
end
