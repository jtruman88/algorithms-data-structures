/*

*/

var generateParenthesis = function(n) {
  const result = [];
  const parens = generateParensArray(n);
  helper(n, result, '', parens, []);
  return result;
};

function helper(n, result, candidate, parens, indices) {
  console.log(candidate);
  if (candidate.length === n * 2 && !result.includes(candidate)) {
    result.push(candidate);
  } else {
    for (let i = 0; i < parens.length; i += 1) {
      if (indices[i]) continue;
      if (parens[i] === ')' && !isValidParens(candidate + parens[i])) continue;
      candidate += parens[i];
      indices[i] = true;
      helper(n, result, candidate, parens, indices);
      indices[i] = false;
      candidate = candidate.slice(0, candidate.length - 1);
    }
  }
}

function generateParensArray(n) {
  let parens = '';
  for (let i = 0; i < n; i += 1) {
    parens += '()';
  }

  return parens;
}

function isValidParens(parens, n) {
  let open = 0;
  let close = 0;

  for (let i = 0; i < parens.length; i += 1) {
    if (parens[i] === '(') open += 1;
    if (parens[i] === ')') close += 1;
    if (close > open) return false;
  }

  return true;
}

console.log(generateParenthesis(3));

// working solution

function generateParenthesis(n) {
  const result = [];
  helper(n, '', result, 0, 0);
  return result;
}

function helper(max, current, result, open, close) {
  if (current.length === max * 2) {
    result.push(current);
  } else {
    if (open < max) {
      helper(max, current + '(', result, open + 1, close);
    }

    if (close < open) {
      helper(max, current + ')', result, open, close + 1);
    }
  }
}
