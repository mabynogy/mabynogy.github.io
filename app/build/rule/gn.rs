fn rule_gn x y:etc
 check is_ident x
 check every y is_argument

 let v1 map y get_parameter
 let v2 join v1 ","
 let v3 paren v2
 
 ret concat "function* " x v3
end
