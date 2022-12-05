fn con_print x y
 check is_obj x
 check is_obj y
 
 fn set_text x y
  check is_obj x
  check is_str y
  
  let s concat y " "
  
  assign x.textContent s
 end
 
 fn get_content x
  let parameters evt_parameters x
  let a arr
  
  forof parameters
   if is_str value
    push a value
   else
    let s to_dump value
    
    push a s
   end
  end
  
  ret join a " "
 end
 
 let sticky call scroll_sticky
 
 let table x.table
 let order evt_order y
 let time con_time x y
 let content get_content y

 let tr document.createElement "tr" 
 let td_order document.createElement "td"
 let td_time document.createElement "td"
 let td_content document.createElement "td"
 
 assign td_order.style.verticalAlign "top"
 assign td_order.style.whiteSpace "pre"
 
 assign td_time.style.verticalAlign "top"
 assign td_time.style.whiteSpace "pre"
 assign td_time.style.textAlign "right"
 
 assign td_content.style.width "100%"
 assign td_content.style.whiteSpace "pre-wrap"
 //assign td_content.style.wordBreak "break-all"

 set_text td_order order
 set_text td_time time
 assign td_content.textContent content

 tr.appendChild td_order
 tr.appendChild td_time
 tr.appendChild td_content
 table.appendChild tr
 
 if sticky
  call scroll_bottom
end
