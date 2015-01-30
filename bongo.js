  var ul = $('<ul>').appendTo('body');
    var json = { 
        "items": ['item 1'], 
        things:['thing 1']
    };
    $(json.items).each(function(index, item) {
        ul.append($(document.createElement('li')).text(item));
    });
    $(json.things).each(function(index, thing) {
        ul.append($(document.createElement('li')).text(thing));
    });