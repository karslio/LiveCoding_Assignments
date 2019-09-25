var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {
    title: "LiveCoding jQuery Assignment",
    titleTwo: "LiveCoding Topics",
    titleAlt: "Topics for coders",
    topicList:"Topics to Cover"
  });
});

module.exports = router;
