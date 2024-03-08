function callbackFunction(number) {
  for (i = 1; i <= number; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
callbackFunction(10);
