$(document).ready(function(){
    var thisValue = 0;
    var valueOne = 0;
    var valueTwo = 0;

    $('.x1').click(function(event){
        $('.oper').css({"pointer-events": "auto"});
        if($('.x1').hasClass('first-active')){
            thisValue = $(this).text();
            $('.valueOne').append(thisValue);
            valueOne = $('.valueOne').text();
            console.log(valueOne);
        }else if($('.x1').hasClass('second-active')){
            thisValue = $(this).text();
            $('.valueTwo').append(thisValue);
            valueTwo = $('.valueTwo').text();
            console.log(valueTwo);
        }
    });

    $('.oper').click(function(){
        oper = $(this).html();
        $('.valueOper').text(oper);
        oper = $('.valueOper').text();
        console.log(oper);
        $('.x1').removeClass('first-active').addClass('second-active')
    });

    $('#equal').click(function(){
        valueOne = parseFloat(valueOne);
        valueTwo = parseFloat(valueTwo);

        if(oper == "+"){
            valueOne += valueTwo;
        }else if(oper == "-"){
            valueOne -= valueTwo;
        }else if(oper == "×"){
            valueOne *= valueTwo;
        }else if(oper == "÷"){
            valueOne /= valueTwo;
        }

        $('.valueOne').text(valueOne);
        $('.valueOper').text('');
        $('.valueTwo').text('');
    });

    $('#clear').click(function(){
        $('.x1').addClass('first-active');
        $('.oper').css({"pointer-events":"none"});
        $('.valueOne').text('');
        $('.valueOper').text('');
        $('.valueTwo').text('');
    })
});