var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var exec = require('child_process').exec;

(function() {
    var dlDir = './downloads/';
    var host = 'http://en.wikipedia.org/wiki/List_of_sandwiches';
    
    request(host, function(err, resp, body) {
        if (err) throw err;

        $ = cheerio.load(body);
        $('table.wikitable tr').each(function(){
            var $row = $(this);

            $row.children('td').each(function(i){
                if (i === 1){
                    var dlPage = $(this).find('img').attr('src');

                    // Make sure an image exists
                    if (dlPage){
                        request(host+dlPage,function(err,resp,body){
                            //redirects image
                            var fileUrl = resp.request.uri.href;
                            var fileUrl = fileUrl.replace(/(http:\/\/en.wikipedia.org\/wiki\/List_of_sandwiche)\w+/g,"http:")
                                                .replace(/(\/thum)\w+/g,"")
                                                .replace(/(\/120px-)\S+/g,"");
                            var fileName = url.parse(fileUrl).pathname.split('/').pop();
                            console.log(fileName);
                            //in curl we have to escape '&' from fileUrl
                            var curl =  'curl ' + fileUrl.replace(/&/g,'\\&') +' -o ' + dlDir+fileName + ' --create-dirs';
                            var child = exec(curl, function(err, stdout, stderr) {
                                if (err){ console.log(stderr); throw err; } 
                                else console.log(fileName + ' downloaded to ' + dlDir);
                            });
                        })
                    }
                }
            });
        });


    });
})();