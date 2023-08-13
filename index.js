const express = require("express");
const app = express();
const port = 3000;

//Route
app.get("/trang-chu", (req, res) => {
  res.send("<p>Hello World!</p>");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
