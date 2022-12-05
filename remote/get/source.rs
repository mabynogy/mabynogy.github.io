gn get_source
 let scripts document.scripts
 
 forof scripts
  let s1 value.textContent
  let s2 to_str s1
  let r txt_compact s2

  if match_r r "init()"
   ret r
 end

 forof scripts
  let url to_str value.src
  
  if is_url url
   let xhr perform xhr_load url
   let r txt_compact xhr.response

   if match_r r "init()"
    ret r
  end
 end
 
 stop "get-source"
end
