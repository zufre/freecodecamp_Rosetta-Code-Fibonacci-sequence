function fibonacci(n) {
  
    if(n-1 < 2) {
      return n-1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
fibonacci(5)
