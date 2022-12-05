fn git_download x
 check is_obj x
 
 let dir x.dir
 let home dir_up dir

 dir_reset dir
 
 os_work home "git" "clone" "--depth" 1 x.git
  
 //git_clean x

 ret x.url
end
