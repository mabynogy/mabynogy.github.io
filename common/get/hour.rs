fn get_hour x

 if is_undef x
  let t call get_now
  
  ret get_hour t
 end
 
 check is_num x
 
 let n mul x 1000
 let o new Date n
 let h call o.getHours
 let hour pad_l h 2
 let m call o.getMinutes
 let minute pad_l m 2
 
 ret concat hour ":" minute
end
