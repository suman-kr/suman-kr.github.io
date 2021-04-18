const quote = new Promise((res, err) => {
  let quote = fetch("http://py-quoters.herokuapp.com");
  res(quote.then((e) => e.json()));
  err("URL down");
});


setTimeout(() => {
  quote.then((e) => {
    document.getElementById("quote").innerText = e.quote;
  });
}, 500);
