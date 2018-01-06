$(function(){
  var elem,getText;
  $.getJSON('quotes.json', function (data) {
    elem=data.quote_maker;
    show_quote();
  });

    $('#generator').click(function(){
        show_quote();
    })
    function show_quote(){
        var rand_val=Math.floor(Math.random()*elem.length),
            rand_words=Math.floor(Math.random()*elem[rand_val].words.length),
            get_word=elem[rand_val].words[rand_words],
            get_writer=elem[rand_val].writer;
        getText=get_word+"-"+get_writer;
        $('#container').fadeOut(300,function(){
            $('#quote').text(get_word);
            $('#writer').text(get_writer);
            $('#container').fadeIn(300);
        });
        /*
        $('a[data-text]').each(function(){
            $(this).attr('href',"https://twitter.com/share?text="+get_word);
        });*/
    }
    $('#tweet').click(function(event){
            var url="https://twitter.com/share?text="+getText;
            window.open(url);
        })
})