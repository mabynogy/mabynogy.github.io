gn wp_pages x
 check is_num x

 let r arr 
 let n inc x
 let url "https://www.extropia.fr/wp-json/wp/v2/pages"
 let query concat url "?page=" n
 let result perform xhr_load query
 
 let response result.response
 
 forof response
  let id value.id
  let parent value.parent
  let url value.link
  let title value.title.rendered
  let content value.content.rendered
  let o obj id parent url title content
  
  push r o
 end
 
 ret r 
end
