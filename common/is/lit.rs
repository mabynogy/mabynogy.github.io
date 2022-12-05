fn is_lit x

 if not is_canonic x
  ret false
  
 let v JSON.parse x
 
 ret is_str v
end
