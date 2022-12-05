fn get_date x

 if is_undef x
  let t call get_now
  
  ret get_date t
 end
 
 check is_num x
 
 let n mul x 1000
 let o new Date n
 let year call o.getFullYear
 let m call o.getMonth
 let month inc m
 let day call o.getDate
 let pmonth pad_l month 2
 let pday pad_l day 2
 
 ret concat year "-" pmonth "-" pday
end
