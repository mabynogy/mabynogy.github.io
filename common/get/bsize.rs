fn get_bsize x
 check is_uint x
 
 let b 1024
 let kb mul b 1024
 let mb mul kb 1024
 let gb mul mb 1024
 let tb mul gb 1024
 
 if lt x b
  ret concat x "b"

 if lt x kb
  let n div x b
  let s to_fixed n
  
  ret concat s "Kb"
 end

 if lt x mb
  let n div x kb
  let s to_fixed n
  
  ret concat s "Mb"
 end

 if lt x gb
  let n div x mb
  let s to_fixed n
  
  ret concat s "Gb"
 end

 let n div x gb
 let s to_fixed n
 
 ret concat s "Tb"
end
