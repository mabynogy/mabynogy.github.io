gn rt_ready x
 check is_obj x

 var loaded false
 
 fn on_load
  assign loaded true
 end

 assign window.onload on_load
 
 while not loaded
  yield
 end
end

