function add(x, y) {
  while (y > 0) {
    common = x & y;
    uncommon = x ^ y;
    x = uncommon;
    y = common << 1;
  }

  return x;
}
