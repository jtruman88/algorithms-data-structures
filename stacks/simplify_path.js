/*
set stack to []
loop through input path
if char === '.' && nextChar === '.'
  pop
else if char === '/'
  continue
else
  let dir = '';
  while path[i] !== '.' && path[i] !== '/'
    dir += path[i]
    i += 1;

  push dir

return '/' + stack.join('/');
*/

var simplifyPath = function(path) {
  const stack = [];
  let i = 0;

  while (i < path.length) {
    if (path[i] === '/') {
      i += 1;
    } else {
      let dir = '';
      while (path[i] !== '/' && path[i]) {
        dir += path[i];
        i += 1;
      }

      if (dir.length === 2 && dir[0] === '.' && dir[1] === '.') {
        stack.pop();
      } else if (dir !== '.') {
        stack.push(dir);
      }
    }
  }

  return '/' + stack.join('/');
};
