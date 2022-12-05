fn include_dir x
 check is_str x

 let r arr
 
 if is_sub_dir x
  forof dir_read x
   let a include_dir value
   
   append r a
  end
 else
  forof dir_read x
   if is_file value
    let v include_file value
    
    if is_arr v
     append r v
    elseif is_obj v
     push r v
    else
     stop "include-dir"
   end
  end   
 end
 
 ret r
end
