fn to_num x
 check is_str x
 
 let r Number.parseFloat x
 
 check is_num r
 
 ret r
end
