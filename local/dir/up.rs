fn dir_up x
 check is_dir x
 
 let path path_real x
 let a path_split path
 
 pop a
 
 ret path_join a
end
