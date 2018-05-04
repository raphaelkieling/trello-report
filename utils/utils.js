const toLowercase = x => (validParameter(x)("string") ? x.toLowerCase() : "");
const trim = x => x.trim();
const getMessageError = err =>
  validParameter(err)("object") && err.message
    ? err.message
    : "Error in server";

const showErrorLog = errString => console.log(`[ ERROR ]`, errString.red);

const validParameter = parameter => type =>
  parameter !== null && parameter !== undefined && typeof parameter === type;

module.exports = {
  toLowercase,
  trim,
  getMessageError,
  showErrorLog,
  validParameter
};
