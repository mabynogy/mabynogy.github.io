fn is_nl x

 if same x "\n"
  ret true

 if same x "\r"
  ret true

 if same x "\r\n"
  ret true
  
 ret false
end
