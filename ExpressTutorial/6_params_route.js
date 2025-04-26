// Route params is used to get a specific resource with corresponding idenfiers
// E.g id or names

const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// Route params are defined in the URL with a : (e.g /path/:id)
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("<h1>Product Not Found</h1>");
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000 ...");
});
