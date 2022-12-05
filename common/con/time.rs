fn con_time x y
 check is_obj x
 check is_obj y
 
 let r evt_time y

 if same r x.time_prompt
  if call is_local
   ret repeat " " r.length
  else
   ret ""
 end
 
 assign x.time_prompt r
 
 ret r
end
