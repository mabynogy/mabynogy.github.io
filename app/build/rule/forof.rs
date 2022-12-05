fn rule_forof x:etc
 let v rule_rvalue x:etc
 
 ret concat "for(const value of " v ")"
end
