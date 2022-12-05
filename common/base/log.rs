let con call con_init

fn log x:etc

 if is_single x
  let first front x
  
   if is_tbl first
    if is_many first
     let s tbl_string first
     
     forof split s
      log value     
     end
     
     ret
    end
   end
   
   if is_txt first
    let a split first
    
    forof a
     log value
    end
   
    ret
   end
 end

 if is_pair x
  let first front x
  let last back x
  
  if is_label first
   if is_txt last
    let a split last
    
    forin a
     let index to_uint key
     let value at a index
     
     log first index value
    end
    
    ret
   end
  end
 end
 
 let time call get_time
 let order con.count
 let data clone x
 let event obj time order data
 
 inc con.count
 
 if is_full con.history
  let context back con.history
  
  push context event
 else
  con_print con event
end
