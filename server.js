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

			var results = [];

			$('table.wikitable tr').each(function(){
				var $row = $(this);
				var json = { name : '', image: '', origin : '', description : ''};

				$row.children('td').each(function(i){
					if (i === 0){
			        	json.name = $(this).text().replace(/[0-9]/g,"")
			        							  .replace(/[\[\]']+/g,"");
					};
					if (i === 1){
						var image =  $(this).find('img').attr('src');
						json.image = image
					};
					if (i === 2){
			        	json.origin = $(this).text().replace(/[\[\]']+/g,"");
					};
					if (i === 3){
			        	json.description = $(this).text().replace(/[\[\]']+/g,"");
					};
			        
		        });
				results.push(json);

			});

			if (!fs.existsSync('data')){
			    fs.mkdirSync('data');
			}

			fs.appendFile('data/sandwiches.json', JSON.stringify(results, null, 4), function(err){
		        console.log('File successfully written!');
		  	});
		};

        res.send('check your console');
	});
});

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app; 