fn write x y z:etc
 check is_arr x
 check is_ident y
 
 let operator y
 let parameters z
 let children arr
 
 let o obj operator parameters children
 
 push x o
 
 ret o.children
end


