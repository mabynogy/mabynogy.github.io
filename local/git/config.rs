fn git_config x
 check is_obj x
 
 git_work x "config" "user.email" x.mail
 git_work x "config" "user.name" x.user
 git_work x "config" "init.defaultBranch" "main"
end
