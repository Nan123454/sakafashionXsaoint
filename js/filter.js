document.getElementById("price-filter").addEventListener("change", function () {
  var filterValue = this.value;
  var products = document.querySelectorAll(".project_box");

  products.forEach(function (product) {
    var priceText = product.querySelector("h3").innerText;
    var price = parseFloat(priceText.match(/\d+\.?\d*/)[0]);

    if (filterValue === "all" || price <= parseFloat(filterValue)) {
      product.style.display = "block"; // Show product
    } else {
      product.style.display = "none"; // Hide product
    }
  });
});
