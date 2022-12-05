fn get_source_offset
 //ret 7
 
 let frames call get_calls aaa 
 let frame front frames
 
 check is_single frames
 check same frame.name "global"
 
 ret sub frame.line 1
end
