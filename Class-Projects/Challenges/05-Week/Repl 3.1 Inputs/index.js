function inputs() {
  var store = document.getElementById("storeInput");
  var quant = document.getElementById("valueInput");
  var product = document.getElementById("productInput");
  let allText = `I shopped at ${store.value} for ${quant.value} ${product.value}.`;
  document.getElementById("output").innerHTML = allText;
  console.log(allText);
}
