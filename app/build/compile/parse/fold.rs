fn fold x

 let parent shift x
 let indent parent.indent
 let descendants arr
 
 while is_full x
  let descendant front x
  
  if lte descendant.indent indent
   brk
   
  shift x
  push descendants descendant
 end

 let children arr
 
 while is_full descendants
  let child fold descendants
  
  push children child
 end
 
 let operator parent.operator
 let parameters parent.parameters
 
 ret obj operator parameters children
end
