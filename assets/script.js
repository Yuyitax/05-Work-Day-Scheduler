// Global Variables
var hourSlot = $('.hour');
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

for (var i = 0; i < allTextAreas.lenght; i++) {

  if (currentTime = time) {
  allTextAreas.addClass('present');
} else if (currentTime > time) {
  allTextAreas.addClass('past');
} else {
  allTextAreas.addClass('future')
}
}






// do not use below 

// // Render input
// function renderInput() {
//   // Retrieve the hour and input 
//   var hour = localStorage.getItem('.hour')
//   var toDo = localStorage.getItem('.textarea')

//   if(!(hour && toDo)) {
//     // do notthing
//     return
//   }

// }


// function save() {
//   let hourInput = document.querySelector('textarea').value
//   localStorage.setItem('text', hourInput)
// }

// saveInput.addEventListener("click", function(event) {
//   event.preventDefault();

//   var hour = document.getElementsByClassName('hour').textContent;
//   var toDo = document.getElementsByClassName('textarea').innerText;

//   if (toDo === "") {
//     alert('Nothing to save at this time. Add something?');
//   } else {
//   // Save Time and Input to localStorage and render the last registered input
//   localStorage.setItem('Time:', hour);
//   localStorage.setItem('To do:', toDo);
//   renderInput()
//   }
// });
