fn terminal_peek

 fn read
  let m require "fs"
  let n process.stdin.fd
  let o Buffer.from " "
  
  try
   m.readSync n o
  catch
   ret false
  end

  ret call o.toString
 end
 
 let a arr
 
 while
  let s call read

  if is_str s
   push a s
  else
   brk
 end
 
 ret implode a
end
