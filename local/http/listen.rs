fn http_listen x y
 check is_fn x
 
 if is_undef y
  ret http_listen x 9000
 
 let m require "http"
 let r m.createServer x
 
 ret r.listen y
end
