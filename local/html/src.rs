fn html_src

 let a arr

 push a "<!doctype html>"
 push a "<html>"
 push a "<body>"
 push a "<script src=\"/remote\">"
 push a "</script>"
 push a "</body>"
 push a "</html>"

 ret join a
end
