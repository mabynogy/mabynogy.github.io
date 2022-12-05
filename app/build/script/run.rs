fn script_run x y:etc
 check is_file x
 
 let binary front process.argv

 ret os_system binary x y:etc
end
