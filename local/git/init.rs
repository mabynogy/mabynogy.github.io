fn git_init x y z
 check is_str x
 check is_str y
 
 if is_undef z
  let config config_init x
  
  ret git_init x y config.user
 end

 check is_str z

 let config config_init x   
 let domain config.domain
 let group z
 let user config.user
 let mail config.mail
 let pat config.pat
 let dir path_real y
 let repo path_base dir
 let access concat pat "@" domain
 let auth concat user ":" access
 let git concat "https://" auth "/" group "/" repo ".git"
 let url concat "https://" domain "/" group "/" repo
  
 check is_dir dir
 
 ret obj domain group user mail pat dir repo git url
end
