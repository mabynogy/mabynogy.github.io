fn get_frames x

 if is_undef x
  let e new Error "frames"
  
  ret get_frames e
 end
 
 check is_obj x

 let v1 to_str x.stack
 let v2 txt_compact v1
 let r split v2

 if call is_v8
  shift r

  forin r
   let value get r key
   let s1 strip_l value "at "
   let s2 replace s1 "(" ""
   let s3 replace s2 ")" ""
   
   put r key s3
  end
 
 ret r
end
