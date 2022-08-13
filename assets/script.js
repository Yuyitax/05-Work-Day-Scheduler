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

window.onload = loadVariable;
function loadVariable() {
  var times = ['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM']
  for (let i = 0; i < times.length; i++) {
    let localStorageValue = localStorage.getItem(times[i]);
    // console.log(localStorage.getItem(times[i]))
    document.getElementById(i).innerHTML = localStorageValue
  }
}



// window.onload = function loadInput() {
// const textInputs = parseInt($(this).siblings('textarea').val());
// for (var i = 0; i < textInputs.length; i++) {
//   console.log(textInputs[i]);
//   }




// window.onload = function loadInput() {
// var savedInput = localStorage.getItem('8:00 AM');
// $('#08', '#09', '#10','#11', '#12', '#13', '#14', '#15', '#16', '#17' ).innerText = savedInput
// }

// function retrieveInput() {
//   $("#hour").each(function() {
//       var currentHour = $(this).siblings('div').text()
//       var savedVal = localStorage.getItem(currentHour);
      
//       // console.log(this);
//       console.log(currentHour);

//       if(savedVal !== null) {
//           $(this).siblings('textarea').val(savedVal);
//       }
//   });
// }
// retrieveInput();
