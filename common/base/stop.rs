fn stop x

 if is_undef x
  ret stop "stop"
  
 check is_str x

 throw new Error x
end
