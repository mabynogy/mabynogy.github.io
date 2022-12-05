fn beep x y

 if is_undef x
  ret beep 0.1 y
 
 check is_pos x
 
 if is_undef y
  ret beep x 500
  
 check is_uint y
 
 let percent 16
 let down concat "-" percent "%"
 let up concat "+" percent "%"
 
 os_execute "pactl" "set-sink-volume" 0 down
 os_execute "play" "-n" "-c1" "synth" x "sine" y
 os_execute "pactl" "set-sink-volume" 0 up
end
