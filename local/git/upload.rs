fn git_upload x
 check is_obj x
 
 let message call get_timestamp
 
 git_work x "init"
 
 git_config x
 
 git_work x "add" "."
 git_work x "commit" "-m" message
 git_work x "push" "--force" "--all" x.git
 
 git_clean x

 ret x.url
end
