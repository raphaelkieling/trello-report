const _ = require("paretojs");
const colors = require("colors");
const {
  toLowercase,
  trim,
  getMessageError,
  showErrorLog,
  validParameter
} = require("./utils/utils");

const Trello = require("node-trello");

function TrelloReport(config) {
  if (typeof config !== "object")
    throw new Error("Config TrelloReport not defined");

  if (!validParameter(config.your_key)("string"))
    throw new Error("YOUR_KEY not valid");
  if (!validParameter(config.token)("string"))
    throw new Error("TOKEN not valid");
  if (!validParameter(config.id_list)("string"))
    throw new Error("ID_LIST not valid");

  this.config(config);
}

TrelloReport.prototype.config = function(config) {
  let { your_key, token, id_list } = config;
  this.id_list = id_list;

  this.trello = new Trello(your_key, token);
};

TrelloReport.prototype.middleware = function() {
  return (err, req, res, next) => {
    let error = _.pipe(getMessageError, toLowercase)(err);
    showErrorLog(error);

    this.createCard(error).then((err, data) => {
      console.log("Card sended to trello.");
    });

    res.status(500).send({
      error
    });
  };
};

TrelloReport.prototype.createCard = function(name) {
  if (!validParameter(name)("string"))
    throw new Error("Need name valid to create a card");

  return new Promise((resolve, reject) => {
    this.trello.post(
      "/1/cards",
      {
        idList: this.id_list,
        name
      },
      resolve
    );
  });
};

module.exports = TrelloReport;
