fn rule_forin x:etc

 let v rule_rvalue x:etc
 
 ret concat "for(const key in " v ")"
end
