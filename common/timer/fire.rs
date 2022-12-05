fn timer_fire x y z
 check is_obj x
 check is_fn y
 
 if is_undef z
  let t div 1 24
  
  ret timer_fire x y t
 end
 
 check is_pos z
 
 let n mul z 1000
 
 assign x.type "single"
 assign x.id setTimeout y n
end
