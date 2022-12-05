fn translate x
 check is_obj x

 let a apply x
 let operator x.operator
 let children x.children
 var node false
 
 if is_full children
  assign node true
  
 if is_scope operator
  assign node true  
  
 if node
  var brace true
  
  if is_control operator
   if is_single children
    let child front children
    let operator child.operator
    
    if same operator "let"
    elseif same operator "var"
    elseif same operator "fn"
    elseif is_empty child.children
     assign brace false
   end
  end
  
  if brace
   push a "{"
  
  forof children
   let s translate value
   
   if is_full s
    push a s
  end

  if brace
   push a "}"
 end
 
 ret join a
end
