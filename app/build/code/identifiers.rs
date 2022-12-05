fn code_identifiers x
 check is_str x
 
 let r arr
 let lines split x
 
 forof lines
  if gt value.length 1024
   log "skip" value
   
   cont
  end
  
  let words delimit value is_alnum
  
  forof words
   if is_snake value
    if contain r value
     cont  
     
    push r value
   end
  end
 end
 
 sort r
 
 ret r
end
