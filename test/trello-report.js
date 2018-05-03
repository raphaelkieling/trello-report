const { expect } = require("chai");
const trelloReport = require("../index");

const config = {
  your_key: "65912710581be28db8a96148f71a38e9",
  token: "f1239d42c5c75a91afe3d74bef7d2333da1a411bbbfb3f8f3762b0b9cae2cc2e",
  id_list: "58619e1ec80002829728bfb3"
};

describe("Generate a middleware", () => {
  it("Should generate a middleware", done => {
    let trello = new trelloReport(config);

    expect(trello).to.be.an("object");

    done();
  }),
    it("Should generate a middleware with error", done => {
      try {
        new trelloReport({
          your_key: 10,
          token: 0,
          id_list: 0
        });
      } catch (e) {
        expect(e.message).to.be.a("string");
      }

      done();
    }),
    it("Should create a card", done => {
      let trello = new trelloReport(config);
      trello.createCard("Tested 01").then((err, data) => {
        if (err) return done(err);
        done();
      });
    });
});
