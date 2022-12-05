fn con_init 
 let r call con_construct
 
 assign r.width 144
 assign r.height 35
 
 let style document.createElement "style"
 let div document.createElement "div"
 let table document.createElement "table"

 work "../../.." "node" "build.js" "--build"
 work "../../.." "node" "out/build.js" "--inline"

 let css work "../../.." "node" "out/inline.js" "--silent" "src/remote/con/css.txt"
 
 assign style.textContent css
 assign r.table table
  
 assign table.style.width "100%"
 assign div.style.overflowX "clip"

 document.body.appendChild style
 document.body.appendChild div
 div.appendChild table

 ret r
end

 

