fn rule_fornum x:etc

 let v rule_rvalue x:etc
 
 ret concat "for(let key=0;key<" v ";key++)"
end
