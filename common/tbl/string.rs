fn tbl_string x
 check is_arr x
 
 if is_empty x
  ret ""
 
 let table copy x
 let first front table
 let columns get_keys first
 
 forof columns
  tbl_pad table value
 end
 
 let titles arr
 
 forof columns
  let cell get first value
  let n cell.length  
  let title pad_r value n
  
  push titles title
 end
 
 let lines arr
 let header join titles " "
 let separator repeat "-" header.length
 
 push lines separator
 push lines header
 push lines separator
 
 forof table
  let cells get_values value
  let s join cells " "
  
  push lines s
 end

 push lines separator
 push lines ""
 
 ret join lines
end
