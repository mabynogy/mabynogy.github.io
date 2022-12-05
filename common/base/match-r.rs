fn match_r x y
 check is_str x
 check is_str y
 
 if is_empty x
  ret false

 if is_empty y
  ret false

 ret x.endsWith y
end
