gn wp_page_count x

 let url "https://www.extropia.fr/wp-json/wp/v2/pages"
 let result perform xhr_load url
 
 ret get result.headers "x-wp-totalpages"
end
