'use strict';

var mongoose = require('mongoose'),
	searchPlugin = require('mongoose-search-plugin'),
    Schema = mongoose.Schema;

var ContentsScheme = new mongoose.Schema({
	url_id: String,
	url: String, 
	content: { type: String, index: { unique: true, dropDups: true }}
});

ContentsScheme.plugin(searchPlugin, {
	fields: ['url', 'content']
});

module.exports = mongoose.model('Contents', ContentsScheme);