fn get_apps

 let r arr
 let app dir_locate "src/app"
 
 forof dir_read app
  let base path_base value  
  
  if is_app base
   push r base
 end
 
 ret r
end
