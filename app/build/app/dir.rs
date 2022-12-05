fn app_dir x
 check is_str x

 let app dir_locate "src/app" 
 let r path_concat app x
 
 check is_dir r
 
 ret r
end
