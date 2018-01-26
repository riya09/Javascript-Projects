$('input[type="text"]').keypress(function(event){
    if(event.which===13){
        var todonext=$(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> "+todonext+"</li>")
    }
})

$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
