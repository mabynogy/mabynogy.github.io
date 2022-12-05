fn cache_invalidate x
 check is_obj x

 let count 8

 forin x
  let entry get x key
  let keys entry.keys
  let values entry.values
  let n min count keys.length
  
  fornum n
   let n get_random keys.length
   
   remove keys n
   remove values n
  end
 end
end
