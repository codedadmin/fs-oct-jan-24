const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  const names = [];
  names.push("Abdullah");
  names.push("Moudhi");
  names.push("Omar");
  names.push("Dawood");
<<<<<<< HEAD
  names.push("SarahM");
  names.push("Shouq");
=======
>>>>>>> origin/master
  names.push("Hey there! This is Sultan!");
  names.push("Dingus");
  names.push("Sarah");
   names.push("Abdullah Al Abbas");
   names.push("Abdullah Mashaan");


  res.send(names);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
