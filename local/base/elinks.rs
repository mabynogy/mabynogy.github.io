fn elinks x

 let s1 os_execute "elinks" "-dump" x
 let s2 txt_normalize s1
 let lines split s2 
 let n find lines "References"
 
 if is_neg n
  let text s2
  let links arr
  
  ret obj text links
 end
 
 let a slice_l lines n
 let text join a
 
 shift lines n
 shift lines
 
 let links arr
 
 while is_full lines
  let s1 shift lines
  let s2 trim s1
  let a split s2 " "
  
  if is_pair a  
   let s back a
   
   if is_url s   
    push links s  
  end
 end
 
 ret obj text links
end
