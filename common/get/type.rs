fn get_type x

 if is_none x
  ret "none"
 elseif is_bool x
  ret "bool"
 elseif is_str x
  ret "str"
 elseif is_arr x
  ret "arr"
 elseif is_obj x
  ret "obj"
 elseif is_fn x
  ret "fn"
 elseif is_gn x
  ret "gn"
 else
  ret "other"
  
end
