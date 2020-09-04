const indexedContentControllers = require("./controllers/indexedContent");

const router = (app) => {
  app.post('/indexed', indexedContentControllers.find());
}

module.exports = router;