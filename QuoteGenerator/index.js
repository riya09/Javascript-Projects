$(function(){
  var elem,getText;
  $.getJSON('quotes.json', function (data) { //loading json file
    elem=data.quote_maker; //store the array of data in a variable which is now an array object
    show_quote();
  });

    $('#generator').click(function(){
        show_quote();//generates new quote on every click
    })
    function show_quote(){
        var rand_val=Math.floor(Math.random()*elem.length),//choose a random value between 0 and the array length of elem
            rand_words=Math.floor(Math.random()*elem[rand_val].words.length), //choose the index of any random words of the random writter choosen
            get_word=elem[rand_val].words[rand_words],//get the word
            get_writer=elem[rand_val].writer;//get the writer name
        getText=get_word+"-"+get_writer;
      //fadein and fadeout effect of text
        $('#container').fadeOut(300,function(){
            $('#quote').text(get_word);
            $('#writer').text(get_writer);
            $('#container').fadeIn(300);
        });
 
    }
    $('#tweet').click(function(event){
            var url="https://twitter.com/share?text="+getText;
            window.open(url);//opens a new window of twitter share page
        })
})
