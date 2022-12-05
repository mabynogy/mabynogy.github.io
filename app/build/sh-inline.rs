fn sh_inline x
 check is_str x
 
 let binary front process.argv
 let shebang concat "#!" binary
 
 ret concat shebang "\n" x  
end
