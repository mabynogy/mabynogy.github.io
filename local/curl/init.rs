fn curl_init x y

 if is_undef x
  ret curl_init "get" y

 if is_undef y
  ret curl_init x "http://localhost"
  
 let method x
 let url y
 let headers obj
 let parameters obj
 
 ret obj method url headers parameters
end
