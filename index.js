const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.status(200).send({
    status: 200,
    message: "Working",
    data: [],
  });
});

app.listen(5000, () => {
  console.log("Server Working On 5000 Port!");
});
