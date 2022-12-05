gn xhr_load x
 check is_str x
 
 let xhr xhr_init "get" x
 
 ret perform xhr_execute xhr
end
