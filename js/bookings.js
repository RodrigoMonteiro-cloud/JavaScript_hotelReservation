(function(){
    
    
    
//    Function to check length of first name
    
    var validations = 0;
function checkFirstName(minlength){
    if(elfirstname.value.length < minlength){
        elfirstname_feedback.textContent = 'First name should be atleast ' + minlength + ' characters';
    }else{
        elfirstname_feedback.textContent = '';
        validations++;
    }
}

var elfirstname = document.getElementById('firstname');
var elfirstname_feedback = document.getElementById('firstname_feedback');
elfirstname.addEventListener('blur', function() { checkFirstName(5); }, false);
    
//    function for email validation
    
function checkEmail(){
    
    var emailstring = elemail.value;
    var positionOfAtTeRate = 0, positionOfDot = 0;
    var firstLetterCheck = emailstring[0];
    var lastLetterCheck = emailstring[emailstring.length - 1];
    var letterCheck; 
    if(lastLetterCheck == '@' || lastLetterCheck == '.' || firstLetterCheck == '@' || firstLetterCheck == '.' ){
        letterCheck = 'invalid';
    }
    
    
    for(var i = 0; i < emailstring.length; i++){
        
        if(emailstring[i] == '@'){
            positionOfAtTeRate = i;
        }
        
        if(emailstring[i] == '.'){
            positionOfDot = (i - 1);
        }
       
    }
    if(positionOfAtTeRate < positionOfDot && letterCheck != 'invalid'){
            elemail_feedback.textContent = '';
            validations++;
        
    }else{
            
            elemail_feedback.textContent = 'Please enter valid E-mail address';
    }
}
    
var elemail = document.getElementById('email');
var elemail_feedback = document.getElementById('email_feedback');
elemail.addEventListener('blur', function(){ checkEmail(); }, false);
    
//    function to check contact number
    

function checkContact(minLength){
    var contactString = elcontact.value;
    
    var numberCheck = !(isNaN(elcontact.value));
    if(numberCheck){
        elcontact_feedback.textContent = '';
        validations++;
    }else{
        elcontact_feedback.innerHTML = 'Contact Number must be 10 Digits';
    }
    if(elcontact.value.length != minLength){
        elcontact_feedback.innerHTML = 'Contact Number must be 10 Digits';
    }
}
    
    
var elcontact = document.getElementById('contact');
var elcontact_feedback = document.getElementById('contact_feedback');
elcontact.addEventListener('blur', function(){ checkContact(10); }, false);
    
   //variable declarations
    var totalSilverRooms = 7, bookedSilverRooms = 0, availableSilverRooms = 7;
    var totalGoldRooms = 5, bookedGoldRooms = 0, availableGoldRooms = 5;
    var totalPlatinumRooms = 3, bookedPlatinumRooms = 0, availablePlatinumRooms = 3;
    
    var totalRooms, booked, available, dropdownItem;
    var newElement;
    
    //creating div element and setting id attribute
    
            newElement = document.createElement('div');
            newElement.setAttribute('id', 'newElement');
            $('main').prepend(newElement);
    
        dropdownItem = sessionStorage.getItem("dropdownItem");  //getting dropdown item from the session storage
    
    if(dropdownItem == null){
        dropdownItem = 'selectoption';
    }
    
        $('#dropdownlist').val(dropdownItem);           //Assaigning dropdown item to dropdown list
        bookedSilverRooms = sessionStorage.getItem("bookedSilverRooms");
        availableSilverRooms = sessionStorage.getItem("availableSilverRooms");
    
        bookedGoldRooms = sessionStorage.getItem("bookedGoldRooms");
        availableGoldRooms = sessionStorage.getItem("availableGoldRooms");
        
        bookedPlatinumRooms = sessionStorage.getItem("bookedPlatinumRooms");
        availablePlatinumRooms = sessionStorage.getItem("availablePlatinumRooms");

    
    // Assaigning room values on first page load
    if (bookedSilverRooms == null){
        totalSilverRooms = 7;
        bookedSilverRooms = 0;
        availableSilverRooms = 7;
     }
    if (bookedGoldRooms == null){
        totalGoldRooms = 5;
        bookedGoldRooms = 0;
        availableGoldRooms = 5;
     }
    if (bookedPlatinumRooms == null){
        totalPlatinumRooms = 3;
        bookedPlatinumRooms = 0;
        availablePlatinumRooms = 3;
     }
    
    if(dropdownItem == 'Silver'){
        totalRooms = totalSilverRooms;
        booked = bookedSilverRooms;
        available = availableSilverRooms;
    }else if(dropdownItem == 'Gold'){
        totalRooms = totalGoldRooms;
        booked = bookedGoldRooms;
        available = availableGoldRooms;
    }else if(dropdownItem == 'Platinum'){
        totalRooms = totalPlatinumRooms;
        booked = bookedPlatinumRooms;
        available = availablePlatinumRooms;
    }else{
        totalRooms = totalSilverRooms + totalGoldRooms + totalPlatinumRooms;  //calculating total rooms
        booked = bookedSilverRooms + bookedGoldRooms + bookedPlatinumRooms;   //calculating booked rooms
        available = availableSilverRooms + availableGoldRooms + availablePlatinumRooms; //calculating available rooms
    }
    
    // Displaying total, booked & Available Rooms
    if(dropdownItem == 'selectoption'){
            $('#totalRooms').html('Total Rooms:<br/><b>' + totalRooms + '</b>');
            $('#roomsBooked').html('Booked:<br/><b>' + booked + '</b>');
            $('#roomsLeft').html('Available:<br/><b>' + available + '</b>');
       }else{

            $('#totalRooms').html(dropdownItem + ' Total Rooms:<br/><b>' + totalRooms + '</b>');
            $('#roomsBooked').html(dropdownItem + ' Booked:<br/><b>' + booked + '</b>');
            $('#roomsLeft').html(dropdownItem + ' Available:<br/><b>' + available + '</b>');

       }
    
    if(available == 0){
          $('input[type="submit"]').prop('disabled', true);   // Disabling Book room button when availability = 0
          $('#newElement').addClass('hot');         //Adding class hot to newElement
          $('#newElement').html('No more bookings allowed on ' + dropdownItem);  //Displaying new Element
      } 
    
    $('#dropdownlist').on('change', function(){   // change event on dropdown list
        $('input[type="submit"]').prop('disabled', false);
        dropdownItem = $('#dropdownlist').val();
        if (bookedSilverRooms == null){
        totalSilverRooms = 7;
        bookedSilverRooms = 0;
        availableSilverRooms = 7;
     }
    if (bookedGoldRooms == null){
        totalGoldRooms = 5;
        bookedGoldRooms = 0;
        availableGoldRooms = 5;
     }
    if (bookedPlatinumRooms == null){
        totalPlatinumRooms = 3;
        bookedPlatinumRooms = 0;
        availablePlatinumRooms = 3;
     }

    if(dropdownItem == 'Silver'){
        totalRooms = totalSilverRooms;
        booked = bookedSilverRooms;
        available = availableSilverRooms;
        
    }else if(dropdownItem == 'Gold'){
        totalRooms = totalGoldRooms;
        booked = bookedGoldRooms;
        available = availableGoldRooms;
    }else if(dropdownItem == 'Platinum'){
        totalRooms = totalPlatinumRooms;
        booked = bookedPlatinumRooms;
        available = availablePlatinumRooms;
    }else if(dropdownItem == 'selectoption'){
        totalRooms = totalSilverRooms + totalGoldRooms + totalPlatinumRooms; //Total Rooms
        booked = (bookedSilverRooms*1) + (bookedGoldRooms*1) + (bookedPlatinumRooms*1);  //Booked Rooms
        available = (availableSilverRooms * 1) + (availableGoldRooms * 1) + (availablePlatinumRooms * 1); //Available Rooms
    }
        
    
        // Displaying Total, Booked & Available Rooms
       if(dropdownItem == 'selectoption'){
            $('#totalRooms').html('Total Rooms:<br/><b>' + totalRooms + '</b>');
            $('#roomsBooked').html('Booked:<br/><b>' + booked + '</b>');
            $('#roomsLeft').html('Available:<br/><b>' + available + '</b>');
       }else{
            $('#totalRooms').html(dropdownItem + ' Total Rooms:<br/><b>' + totalRooms + '</b>');
            $('#roomsBooked').html(dropdownItem + ' Booked:<br/><b>' + booked + '</b>');
            $('#roomsLeft').html(dropdownItem + ' Available:<br/><b>' + available + '</b>');
       }
        
      if(available == 0){
          $('input[type="submit"]').prop('disabled', true);  //Disabling Book Room Button
          $('#newElement').addClass('hot');  //Adding class hot to new Element
          $('#newElement').html('No more bookings allowed on ' + dropdownItem);  //Displaying newElement
      }else{
         $('#newElement').removeClass();  //Removing class of newElement
         $('#newElement').addClass('cool');     //Adding Class cool to newElement
        newElement.innerHTML = 'Bookings Allowed';
      }  
        
        
    });
    

    

    
//    Hotel Object
    
    function Hotel(totalRooms, booked){
        
        this.totalRooms = totalRooms;
        this.booked = booked;
        this.available = function(){
            return this.totalRooms - this.booked;
        };
    }
    
    
    
    
function bookroomFunction(e){
    
    
//    $('#newElement').remove();
    var target = e.target;  //event target property
    e.preventDefault();      //preventing default action of Book now Room button
    
    
    if(dropdownItem != 'selectoption'){
        if(validations >= 3){
            
//            newElement = document.createElement('div');
//            newElement.setAttribute('id', 'newElement');
            $('#newElement').removeClass();
            $('#newElement').addClass('cool');
            newElement.innerHTML = 'Booking Success';
//            $('main').prepend(newElement);
    //        $('h2').before(newElement);
            validations = 0;

    //        elbookroom.reset();

            $('#firstname').val('');
            $('#lastname').val('');
            $('#email').val('');
            $('#contact').val('');




            if(dropdownItem == 'Silver'){
                bookedSilverRooms++;
                booked = bookedSilverRooms;
                totalRooms = totalSilverRooms;
            }else if(dropdownItem == 'Gold'){
                bookedGoldRooms++;
                booked = bookedGoldRooms;
                totalRooms = totalGoldRooms;
            }else if(dropdownItem == 'Platinum'){
                bookedPlatinumRooms++;
                booked = bookedPlatinumRooms;
                totalRooms = totalPlatinumRooms;
            }

            


            var Radisson = new Hotel(totalRooms, booked);   //Creating Raddison Object
            
            if(dropdownItem != 'selectoption'){
                $('#roomsBooked').html(dropdownItem + ' Booked:<br/><b>' + Radisson.booked + '</b>');
                       //created Radisson hotel object

                $('#roomsLeft').html(dropdownItem + ' Available:<br/><b>' + Radisson.available() + '</b>'); 
            }else{
                $('#roomsBooked').html('Booked:<br/><b>' + Radisson.booked + '</b>');
                       //created Radisson hotel object

                $('#roomsLeft').html('Available:<br/><b>' + Radisson.available() + '</b>'); 
            }
                //accessed by dot notation
            available = Radisson.available();
            
//            trail
      if(available == 0){
          $('input[type="submit"]').prop('disabled', true);
          $('#newElement').addClass('hot');
          $('#newElement').html('No more bookings allowed on ' + dropdownItem);
      } 
            


          if(dropdownItem == 'Silver'){
              bookedSilverRooms = booked;
              availableSilverRooms = available;
          }else if(dropdownItem == 'Gold'){
              bookedGoldRooms = booked;
              availableGoldRooms = available;
          }else if(dropdownItem == 'Platinum'){
              bookedPlatinumRooms = booked;
              availablePlatinumRooms = available;
          }
            
            //Using Session Storage to store total, booked & Available rooms count
            sessionStorage.setItem("dropdownItem", dropdownItem);
            sessionStorage.setItem("bookedSilverRooms", bookedSilverRooms);
            sessionStorage.setItem("availableSilverRooms", availableSilverRooms);
            sessionStorage.setItem("bookedGoldRooms", bookedGoldRooms);
            sessionStorage.setItem("availableGoldRooms", availableGoldRooms);
            sessionStorage.setItem("bookedPlatinumRooms", bookedPlatinumRooms);
            sessionStorage.setItem("availablePlatinumRooms", availablePlatinumRooms);
        }else{
        elcontact_feedback.innerHTML = 'Please fill the mandatory details';
        }
    }else{
        elcontact_feedback.innerHTML = 'Please fill the mandatory details';
    }
  
}
   

var elbookroom = document.getElementById('bookroom');
elbookroom.addEventListener('submit', function(e){ bookroomFunction(e); }, false); //calling bookroomFunction on submitting Book Room
    
$('#footer').html('Copyright &copy; ' + new Date().getFullYear());  //assaigning copy right year fromDate object
    
}());