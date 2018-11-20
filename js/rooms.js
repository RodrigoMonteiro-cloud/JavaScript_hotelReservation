$(function(){
    
$('.roomtype').hide();              //Hiding list iems
    
    var displayValue = $('#displayRate').html();
    if(displayValue == ''){
        $('#displayRate').html('Click on Rooms to see rooms list'); //Displaying text to displayrate element
    }
    
$('#rooms').on('click', function(){     //click event on rooms
    $('.roomtype').slideDown('slow');       //used slidedown method
    $('.roomtype li').addClass('cool');     //Added class cool to list items
    $('#displayRate').html('Click on each room to see their costs'); //Displaying text to displayrate element
});

    
    
    $('li.cool').on('click', function(){   //click event on li.class
        $('.roomtype li').addClass('cool');   //Added class cool to list items
        $(this).removeClass();                  //Removing class attribute on list items
        $(this).addClass('hot');                //Added class hot to list items
        var ids = $(this).attr('id');           //Getting id attribute
        
        switch(ids){                            //Switch case to on selection of different list items
            case 'silver':
                $('#displayRate').removeClass();
                $('#displayRate').addClass('silver');
                $('#displayRate').html('Silver Room:<br>$20 per day');
                break;
            case 'gold': 
                $('#displayRate').removeClass();
                $('#displayRate').addClass('gold');
                $('#displayRate').html('Gold Room:<br>$30 per day');
                break;
            case 'platinum': 
                $('#displayRate').removeClass();
                $('#displayRate').addClass('platinum');
                $('#displayRate').html('Platinum Room:<br>$50 per day');
                break;
            default:
                $('#displayRate').html('');
        }
        
    });


$('#footer').html('Copyright &copy; ' + new Date().getFullYear());      //Using date object for copy right year
});

        
