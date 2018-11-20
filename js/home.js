var xhr = new XMLHttpRequest(); //Initiating XMLHttpRequest
xhr.open('GET', 'data/data.json', true); //Opening server interaction
xhr.send(null); //sending null to server
xhr.onload = function() { 
if(xhr.status === 200) { 
    
responseObject = JSON.parse(xhr.responseText);  //converting response text from string to object using parse
var newContent = '';
    //inserting images
for(var i = 0; i < responseObject.events.length; i++){
    
newContent += '<div class="event">';
newContent += '<img src="' + responseObject.events[i].map + '" ';
newContent += 'alt="' + responseObject.events[i].location + '" />';
newContent += '</div>';
    
}
    
document.getElementById('content').innerHTML = newContent;
}
};
//inserting copyright content in the footer
$('#footer').html('Copyright &copy; ' + new Date().getFullYear());