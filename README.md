# Trello Report

Report messages to trello!

![Travis CI](https://travis-ci.org/raphaelkieling/trello-report.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/raphaelkieling/trello-report/badge.svg?branch=master)](https://coveralls.io/github/raphaelkieling/trello-report?branch=master)

## Example with middleware and function createCard

```javascript
const server = require("express")();
const trelloReport = require("../lib/trello_report");

let trelloReportMiddleware = new trelloReport({
  your_key: "YOUR_KEY",
  token: "YOUR_TOKEN",
  id_list: "ID_LIST"
});

server.get("", async (req, res) => {
  try {
    throw new Error("Server error");
  } catch (e) {
    trelloReportMiddleware
      .createCard("Erro no get do software")
      .then(console.log("Card sended"));

    res.status(500).send("ERROR");
  }
});

server.use(trelloReportMiddleware.middleware);

server.listen(3000, () => console.log("listen in 3000"));
```

## Installation

With **npm**

```sh
  npm install --save trello-report-js
```

With **yarn**

```sh
  yarn add --exact trello-report-js
```

## Test

```sh
 npm test
```

Precommit always run npm test. **Test your code**.
