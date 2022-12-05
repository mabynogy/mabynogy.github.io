fn con_init 

 let r call con_construct 
 let stdout process.stdout
 
 if stdout.isTTY
  assign r.width stdout.columns
  assign r.height stdout.rows
 else
  assign r.width 80
  assign r.height 25
 end 

 ret r 
end

 

