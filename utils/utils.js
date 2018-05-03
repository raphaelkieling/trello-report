const toLowercase = x => x.toLowerCase();
const trim = x => x.trim();
const checkMessageError = err =>
  typeof err.message === "string" ? err.message : "Error in server";

const showErrorLog = errString => console.log(`[ ERROR ]`, errString.red);

const validParameterConfig = parameter =>
  parameter !== null &&
  parameter !== undefined &&
  typeof parameter === "string";

module.exports = {
  toLowercase,
  trim,
  checkMessageError,
  showErrorLog,
  validParameterConfig
};
