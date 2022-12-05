fn scroll_outer_height

 let o document.documentElement
 let rect call o.getBoundingClientRect
 
 ret rect.height
end
