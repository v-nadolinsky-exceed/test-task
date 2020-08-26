const indexedContentControllers = require("./controllers/indexedContent");

const router = (app) => {
  app.post('/indexed', indexedContentControllers.post());
}

module.exports = router;