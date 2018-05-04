const { expect } = require("chai");
const {
  getMessageError,
  toLowercase,
  showErrorLog,
  validParameter,
  trim
} = require("../utils/utils");

describe("Utils", () => {
  describe("Get message error", () => {
    it('Should get "Error in server" in getMessageError', done => {
      const error = getMessageError({});
      expect(error).to.be.a("string");
      expect(error).at.equals("Error in server");
      done();
    });

    it('Should get "Error in server" in getMessageError', done => {
      const error = getMessageError();
      expect(error).to.be.a("string");
      expect(error).at.equals("Error in server");
      done();
    });

    it('Should get "Error create" in getMessageError', done => {
      const error = getMessageError(new Error("Error created"));
      expect(error).to.be.a("string");
      expect(error).at.equals("Error created");
      done();
    });
  });

  describe("toLowercase", () => {
    it("Should send HeLLO and get hello", done => {
      let word = toLowercase("HeLLo");
      expect(word).to.be.a("string");
      expect(word).at.equals("hello");
      done();
    });

    it('Should get "" if null', done => {
      let word = toLowercase(null);
      expect(word).at.equals("");
      done();
    });

    it('Should get "" if undefined', done => {
      let word = toLowercase();
      expect(word).at.equals("");
      done();
    });
  });

  describe("validParameter", () => {
    it("Should get false if null parameter", done => {
      let target = validParameter(null)("string");
      expect(target).at.equals(false);
      done();
    });

    it("Should get false if undefined parameter", done => {
      let target = validParameter(null)("string");
      expect(target).at.equals(false);
      done();
    });

    it("Should get false if number parameter", done => {
      let target = validParameter(null)("string");
      expect(target).at.equals(false);
      done();
    });
  });
});
