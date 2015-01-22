var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	url = 'http://en.wikipedia.org/wiki/List_of_sandwiches';

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			var name, 
				image, 
				origin,
				description;

			var json = { name : "", image: "", origin : "", description : ""};

			$('table.wikitable tr').each(function(){
				var row = $(this);

				$(row.children('td')).each(function(i){
					if (i === 0){
			        	name = $(this).text()
					};
					if (i === 1){
			         	image = $(this).find('img').attr('src');
					};
					if (i === 2){
			        	origin = $(this).text()
					};
					if (i === 3){
			        	description = $(this).text()
					};

			        json.name = name;
			        json.image = image;
			        json.origin = origin;
			        json.description = description;   
			        
		        });

				fs.appendFile('data/sandwiches.json', JSON.stringify(json, null, 4), function(err){
			        console.log('File successfully written!');
			    });

			});

		};

        res.send('check your console');
	});
});

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app; 