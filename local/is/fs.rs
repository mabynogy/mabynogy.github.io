fn is_fs x

 if is_str x
  let m require "fs"

  ret m.existsSync x
 end
 
 ret false
end
