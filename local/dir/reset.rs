fn dir_reset x
 check is_str x
 
 if is_dir x
  dir_remove x
 
 dir_make x
end
