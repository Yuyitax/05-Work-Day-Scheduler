// Global Variables
var toDoInput = $('.textarea');
var saveInput = $('.saveBtn');




// Save input to local Storage
saveInput.on('click', function(event){
event.preventDefault()
var text = $(this).siblings('textarea').val()
var time = $(this).siblings('div').text()
console.log(text, time)
localStorage.setItem(time, text);

}) 





//Current Time and Date
var currentTime = function () {
    document.getElementById('currentTime').innerText = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };
  setInterval(currentTime, 1000);

  


// Setting the time by color

var allTextAreas = $('.textarea')

for (var hourSlot = 8; hourSlot < 18; hourSlot++) {

  if (hourSlot < currentTime) {
  $(allTextAreas).addClass('future');
}else if (hourSlot === currentTime) {
  $(allTextAreas).addClass('present');
} else {
  $(allTextAreas).addClass('past');
  console.log(hourSlot)
}
}

// Not working:
// var allTextAreas = $('.textarea')

// for (var i = 0; i < currentTime; i++) {

//   if (currentTime > time) {
//   $(allTextAreas).addClass('future');
// }else if (currentTime === time) {
//   $(allTextAreas).addClass('present');
// } else {
//   $(allTextAreas).addClass('past');
// }
// }
