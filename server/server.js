const server = require("express")();
const trelloReport = require("../index");

let trelloReportMiddleware = new trelloReport({
  your_key: "65912710581be28db8a96148f71a38e9",
  token: "f1239d42c5c75a91afe3d74bef7d2333da1a411bbbfb3f8f3762b0b9cae2cc2e",
  id_list: "58619e1ec80002829728bfb3"
});

server.get("", (req, res) => {
  throw new Error("Error created");
});

server.use(trelloReportMiddleware.middleware);

server.listen(3000, () => console.log("listen 3000"));
