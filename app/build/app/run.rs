fn app_run x y:etc
 check is_str x
 
 let out dir_locate "out"
 let js concat out "/" x ".js"
 let html concat out "/" x ".html"

 if is_file js  
  script_run js y:etc
 elseif is_file html
  if contain y "--debug"
   os_system "google-chrome" "--disable-web-security" "--user-data-dir=tmp/chrome-session" html
  else
   os_open html
 else
  stop "run" 
end
