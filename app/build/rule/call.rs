fn rule_call x y:etc
 check is_name x
 check every y is_parameter
 
 let v1 map y get_parameter
 let v2 join v1 ","
 let v3 paren v2
 
 ret concat x v3
end
