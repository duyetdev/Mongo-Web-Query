'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContentsScheme = new mongoose.Schema({
	url_id: String,
	url: String, 
	content: { type: String, index: { unique: true, dropDups: true }}
});

module.exports = mongoose.model('Contents', ContentsScheme);