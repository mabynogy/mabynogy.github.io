fn is_zero x

 if same x 0
  ret true

 if inline "same(x,-0)"
  ret true

 ret false
end
