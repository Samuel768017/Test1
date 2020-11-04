var chkarr = function(input)
 {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
 };
console.log(chkarr('w3resource'));
console.log(chkarr([1, 2, 4, 0]));