// String query 

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

app.get("/api/v1/query", (req, res) => {
  //Js keeps reading the code even the errors appear,
  // to avoid that use return statement to Error in server
  // E.g ?name=John&age=25
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).send(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000 ...");
});
