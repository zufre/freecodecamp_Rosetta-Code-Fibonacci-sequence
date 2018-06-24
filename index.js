function fibonacci(n) {
  n = n - 1
  let res = [0,1];
  for (let i = 2; i <=n; i++) {
    const a = res[i-1];
    const b = res[i-2];
    const c = a+b;
    res.push(c);
  }
  return res[n];
}
