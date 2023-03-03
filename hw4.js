function timer(start, end) {
  for (let i = start; i <= end; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * (i - start));
  }
}

timer(5, 10);
