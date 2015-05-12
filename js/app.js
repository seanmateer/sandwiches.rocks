 var request = new XMLHttpRequest();
       request.open("GET", "data/sandwiches.json", false);
       request.send(null);

    var jsonString = JSON.parse(request.responseText);

    $(document).ready(function() {
        var $ul = $('<div class="master"></div>').appendTo('#container');

        $.each(jsonString, function(i) {
            var $li = $('<div class="mix" data-myorder="'+ i +'"></div>').appendTo('.master');
            $('<h2>' + this.name + '</h2>').appendTo($li);
            $('<h3>' + this.origin + '</h3>').appendTo($li);
                // var replaceUrl = $('<p class="replace">http://' + this.image + '</p>');
                // var boof = $(replaceUrl).text().replace(/(\/thum)\w+/g,"").replace(/(\/120px-)\S+/g,"");
                // $('<div class="wrap"><img src="' + boof + '"></div>').appendTo($li);
            $('<p>' + this.description + '</p>').appendTo($li);
        });


        // var boof = $('.replace').text().replace(/(\/thum)\w+/g,"");
        // console.log(boof);

        $(function(){
          $('#container').mixItUp();
        });
    });

