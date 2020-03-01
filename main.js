var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12',
 '#e74c3c', '#9b59b6', '#FB6964', '#342224', 
 '#472E32', '#BDBB99', '#77B1A9', '#73A857'];


function chooseColor() {
    var color = Math.floor(Math.random() * 13);
    return colors[color];
}



function randomQoutes() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function(data) {
            $('.quote').html('"' + data.quoteText + '"');
            $('.author').html(data.quoteAuthor);
            $('.shareTwitter').on("click", function(){
                var twtLink = 'https://twitter.com/home?status=' +encodeURIComponent(data.quoteText);
                window.open(twtLink,'_blank');
            })
        },

    })

}

$(document).ready(function(){
        randomQoutes();
    $('.newquote').on("click", function(){
        randomQoutes();
        var setColor = chooseColor();
        $(this).css("background-color", setColor);
       // $('.shareTwitter').css("background-color", setColor);
        $('body').css("background-color", setColor);
        $('p').css("color", setColor);
    });

});

// api twitter nie dziala sprawdzic