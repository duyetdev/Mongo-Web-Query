/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /query              ->  index
 * POST    /query              ->  create
 * GET     /query/:id          ->  show
 * PUT     /query/:id          ->  update
 * DELETE  /query/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Content = require('./query.model');

exports.queryData = function(req, res) {
  var keyword = req.body.keyword || '';
  var page = req.body.page || 0;

  //keyword = '.*' + keyword + '.*';
  console.log('Searching "%s"...', keyword);

  var q = Content.find({ "content": { "$regex": keyword, "$options": "i" } }).skip(page).limit(20);
  q.exec(function(err,docs) { 
      if (err) console.log(err);

      res.json(docs);
  });
}

// Get list of things
exports.index = function(req, res) {
  Content.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}