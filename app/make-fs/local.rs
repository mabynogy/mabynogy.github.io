include "../../common"
include "../../local"

fn main x y:etc

 if is_undef x
  let s call process.cwd
  
  ret main s
 end
 
 let path path_real x
 let paths dir_load path
 let fs arr
 
 forof paths
  let s1 strip_l value path
  let s2 strip_l s1 "/"
  
  push fs s2
 end
 
 let data dir_locate "data"
 let json path_concat data "fs.json"
 let txt path_concat data "fs.txt"
 let content to_json fs
 let text to_dump fs
 
 file_save json content
 file_save txt text
end
