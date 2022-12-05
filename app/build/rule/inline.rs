fn rule_inline x y:etc
 check is_lit x
 check is_empty y
 
 ret JSON.parse x
end

