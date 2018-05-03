const server = require("express")();

server.get("", (req, res) => {
  res.send({
    message: "Hello"
  });
});

server.listen(3000, () => console.log("listen 3000"));
