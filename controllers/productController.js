function getProduct(req, res) {
  res.send("This is get request of productRouter");
}

function postProduct(req, res) {
  res.send("This is post request of productRouter");
}

export{getProduct,postProduct}