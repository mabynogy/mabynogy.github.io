var window_exist null

fn is_remote

 if is_null window_exist
  let o evaluate "window"
  
  assign window_exist is_obj o
 end

 ret window_exist
end
