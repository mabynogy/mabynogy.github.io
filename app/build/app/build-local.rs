fn app_build_local x
 check is_str x
 
 let dir app_dir x
 let local path_concat dir "local.rs"
 let content file_load local
 let silent_compile mute compile 
 let source os_work dir silent_compile content 
 let identifier1 code_identifiers source
 let identifier2 join identifier1 " "
 let var_identifier code_var "_identifier" identifier2
 let code_js concat source "\n" var_identifier "\n" "init()"
 let code_sh sh_inline code_js
 let out dir_locate "out"
 let prefix path_concat out x
 let js concat prefix ".js"
 let sh prefix
 
 file_save js code_js
 file_save sh code_sh

 script_check js

 os_system "chmod" "+x" sh
end
