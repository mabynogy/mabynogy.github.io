fn html_inline x
 check is_str x
 
 let script replace x "</" "<\\/"
 
 let a arr

 push a "<!doctype html>"
 push a "<html>"
 push a "<head>"
 push a "<meta charset=\"utf-8\">"
 push a "</head>"
 push a "<body>"
 push a "<script>"
 
 push a script
 
 push a "</script>"
 push a "</body>"
 push a "</html>"

 ret join a
end
