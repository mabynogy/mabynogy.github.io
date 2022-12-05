fn is_let_embed x

 if not is_obj x
  ret false

 if different x.operator "let"
  ret false
  
 ret like_l x.parameters is_ident "embed" is_lit
end
