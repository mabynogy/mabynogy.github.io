fn git_clean x
 check is_obj x

 let dir path_concat x.dir ".git"
 
 dir_remove dir
end
