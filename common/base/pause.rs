gn pause x
 check is_num x
 
 let begin call get_now
 
 while
  let now call get_now
  let time sub now begin
  
  if gte time x
   brk
 end

end
