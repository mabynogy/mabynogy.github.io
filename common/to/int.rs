fn to_int x
 check is_str x
 
 let r Number.parseInt x
 
 check is_int r
 
 ret r
end
