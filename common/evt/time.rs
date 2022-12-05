fn evt_time x
 check is_obj x

 let s1 to_fixed x.time
 let s2 concat s1 "s"
 let s3 pad_l s2 6
 
 ret concat s3 ">"
end
