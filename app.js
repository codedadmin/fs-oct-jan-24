const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  const names = [];
  names.push("Abdullah");
  names.push("Moudhi");
  names.push("Omar");
  names.push("Dawood");
  names.push("SarahM");
  names.push("Shouq");
  names.push("Sarah");
  names.push("Sarah Alenezi");
  names.push("Sarah AlRashidi");
  names.push("Hello...");
  names.push("Hey there! This is Sultan!");
  names.push("Dingus");
  names.push("Sarah");
  names.push("Abdullah Al Abbas");
  names.push("Abdullah Mashaan");
  names.push("Hamad AlKhalaf");
  names.push("Lulwa");
  names.push("Yousef");
  names.push("hellooo its jenen!!!");
  names.push("Hamad AlKhalaf");

  res.send(names);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
