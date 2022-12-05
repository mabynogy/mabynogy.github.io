fn is_dir x
 let m require "fs"

 try
  let o m.statSync x
 
  ret call o.isDirectory
 catch
  ret false
 end
end
