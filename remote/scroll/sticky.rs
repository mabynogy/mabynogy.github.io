fn scroll_sticky

 if call scroll_visible
 else
  ret true

 let outer call scroll_outer_height
 let inner call scroll_inner_height
 let page_y window.pageYOffset //safari: no scrollY
 let page_bottom add page_y inner 
 
 let n1 sub page_bottom outer
 let n2 abs n1

 ret lte n2 1
end
