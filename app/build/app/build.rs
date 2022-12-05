fn app_build x
 check is_str x
 
 if is_local_app x
  app_build_local x
 elseif is_remote_app x
  app_build_remote x
 else
  stop "app-build"
end
