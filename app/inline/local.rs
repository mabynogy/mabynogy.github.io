include "../../common"
include "../../local"

fn main x y:etc
 check is_file x
 check is_empty y
 
 let v1 file_load x
 let v2 txt_inline v1
 
 console.log v2
end
