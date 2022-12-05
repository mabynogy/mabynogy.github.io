fn get_timestamp x

 if is_undef x
  let t call get_now
  
  ret get_timestamp t
 end
 
 check is_num x
 
 let d get_date x
 let h get_hour x
 
 ret concat d " " h
end
