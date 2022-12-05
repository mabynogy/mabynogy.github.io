fn is_word x

 if not is_str x
  ret false

 if is_empty x
  ret false
    
 if is_lit x
  ret true
  
 if some x is_space
  ret false
 
 ret true
end
