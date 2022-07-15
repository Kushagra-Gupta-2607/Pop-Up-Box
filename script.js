var k = 0;
$(document).ready(function(){

    $('.clicks').on('click', function(){
        if(k%2 == 0) $('#box').addClass('show');
        else $('#box').removeClass('show');
        k++;
    });

    $('.submission').on('click', function(){
        $('#box').removeClass('show');
    });

});