fn is_local_app x

 if not is_str x
  ret false

 let app dir_locate "src/app"
 let main path_concat app x "local.rs"
 
 ret is_file main
end
