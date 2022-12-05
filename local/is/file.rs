fn is_file x
 let m require "fs"
 
 try
  let o m.statSync x
 
  ret call o.isFile
 catch
  ret false
 end
end
