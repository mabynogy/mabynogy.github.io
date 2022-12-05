fn to_arg x

 if is_lit x
  ret JSON.parse x
  
 ret x
end
