fn app_build_remote x
 check is_str x
 
 let dir app_dir x
 let remote path_concat dir "remote.rs"
 let content file_load remote
 let silent_compile mute compile 
 let source os_work dir silent_compile content 
 let identifier1 code_identifiers source
 let identifier2 join identifier1 " "
 let var_identifier code_var "_identifier" identifier2
 let code_js concat source "\n" var_identifier "\n" "init()"
 let code_html html_inline code_js
 let out dir_locate "out"
 let prefix path_concat out x
 let js concat prefix "-html.js"
 let html concat prefix ".html"
 
 file_save js code_js
 file_save html code_html

 script_check js
end
