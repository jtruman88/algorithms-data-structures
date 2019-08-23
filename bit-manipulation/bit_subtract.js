function sub(x, y) {
  while (y > 0) {
    let toSubtract = (~x) & y;
    let uncommon = x ^ y;
    x = uncommon;
    y = toSubtract << 1;
  }

  return x;
}

console.log(sub(2,1));
