fn sleep x

 if is_undef x
  ret sleep 1
  
 check is_pos x
 
 os_execute "sleep" x
end
