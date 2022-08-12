// Global Variables
var allTextAreas = $('.textarea')
var saveInput = $('.saveBtn');


// Save input to local Storage
saveInput.on('click', function(event){
event.preventDefault()
var text = $(this).siblings('textarea').val()
var time = $(this).siblings('div').text()
// console.log(text, time)
localStorage.setItem(time, text);
}) 






//Current Time and Date
var currentTime = function () {
    document.getElementById('currentTime').innerText = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };
  setInterval(currentTime, 1000);


// Setting the fields by color
allTextAreas.each(function(){

var blockHour = parseInt($(this).parent().attr('id').split('-')[1])
// console.log(blockHour)
var currentHour = moment().hour()
// console.log(currentHour)


  if (currentHour === blockHour) {
  $(this).removeClass('past');
  $(this).removeClass('future');
  $(this).addClass('present');
} else if (currentHour < blockHour) {
  $(this).removeClass('past');
  $(this).removeClass('present');

  $(this).addClass('future');
 
} else {
  $(this).removeClass('future');
  $(this).removeClass('present');

  $(this).addClass('past');
}
}) 



// Retrieve data from Storage

function retrieveInput() {

  $("#hour").each(function() {
      var currentHour = $(this).siblings('div').text()
      var savedVal = localStorage.getItem(currentHour);
      
      // console.log(this);
      console.log(currentHour);

      if(savedVal !== null) {
          $(this).siblings('textarea').val(savedVal);
      }
  });
}

retrieveInput();