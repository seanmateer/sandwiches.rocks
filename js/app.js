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
            $('<div class="wrap"><img src="http://' + this.image + '"></div>').appendTo($li);
            $('<p>' + this.description + '</p>').appendTo($li);
        });


        $(function(){
          $('#container').mixItUp();
        });
    });

