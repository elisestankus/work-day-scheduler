
//Wrapped all of the code in a cal to jQuery so the code will begin running when the browser has rendered the html content
$(function () {

  var saveHour9Btn = $('#saveHour9');
  var saveHour10Btn = $('#saveHour10');
  var saveHour11Btn = $('#saveHour11');
  var saveHour12Btn = $('#saveHour12');
  var saveHour13Btn = $('#saveHour13');
  var saveHour14Btn = $('#saveHour14');
  var saveHour15Btn = $('#saveHour15');
  var saveHour16Btn = $('#saveHour16');
  var saveHour17Btn = $('#saveHour17');

  var hour9Input = $('textarea[name = "hour9Input"]');
  var hour10Input = $('textarea[name = "hour10Input"]');
  var hour11Input = $('textarea[name = "hour11Input"]');
  var hour12Input = $('textarea[name = "hour12Input"]');
  var hour13Input = $('textarea[name = "hour13Input"]');
  var hour14Input = $('textarea[name = "hour14Input"]');
  var hour15Input = $('textarea[name = "hour15Input"]');
  var hour16Input = $('textarea[name = "hour16Input"]');
  var hour17Input = $('textarea[name = "hour17Input"]');

  var confirmationMessage = $('#confirm-message')

  //assigns current hour (from dayjs) to currentHour var
  //for loop adds classes for present, past, and future -- started with i=9 to match hour time blocks
  var currentHour = dayjs().format('H');

  for(var i=9; i<18;i++) {
    if(i==currentHour) {
      $('#hour-'+i).addClass('present')
    }
    else if(i<currentHour) {
      $('#hour-'+i).addClass('past')
    }
    else if(i>currentHour) {
      $('#hour-'+i).addClass('future')
    }
  }
//retrieves the user input from local storage and assigns the stored value to a hourStore variable -- then assigns the value of the hourStore variable to be the value of the corresponding text area
  function storeHour9 () {
    var hour9Store = JSON.parse(localStorage.getItem("hour9"));
    hour9Input.val(hour9Store);
  }

  //assigns user input to an hour# variable, saves the hour# variable to local storage, then calls the storeHour# function
  //also sets confirmation message text 
  function saveHour9() {
    var hour9 = hour9Input.val();
    localStorage.setItem("hour9", JSON.stringify(hour9));
    storeHour9();
    confirmationMessage.text('Appointment saved to local storage');
  }

  //when save button is clicked, calls saveHour#
  saveHour9Btn.on("click", saveHour9)

  function storeHour10 () {
    var hour10Store = JSON.parse(localStorage.getItem("hour10"));
    hour10Input.val(hour10Store);
  }

  function saveHour10() {
    var hour10 = hour10Input.val();
    localStorage.setItem("hour10", JSON.stringify(hour10));
    storeHour10();
    confirmationMessage.text('Appointment saved to local storage');
  }

  saveHour10Btn.on("click", saveHour10)

  function storeHour11 () {
    var hour11Store = JSON.parse(localStorage.getItem("hour11"));
    hour11Input.val(hour11Store);
  }

  function saveHour11() {
    var hour11 = hour11Input.val();
    localStorage.setItem("hour11", JSON.stringify(hour11));
    storeHour11();
    confirmationMessage.text('Appointment saved to local storage');
  }

  saveHour11Btn.on("click", saveHour11)

  function storeHour12 () {
    var hour12Store = JSON.parse(localStorage.getItem("hour12"));
    hour12Input.val(hour12Store);
  }

  function saveHour12() {
    var hour12 = hour12Input.val();
    localStorage.setItem("hour12", JSON.stringify(hour12));
    storeHour12();
    confirmationMessage.text('Appointment saved to local storage');
  }

  saveHour12Btn.on("click", saveHour12)

  function storeHour13 () {
    var hour13Store = JSON.parse(localStorage.getItem("hour13"));
    hour13Input.val(hour13Store);
  }

  function saveHour13() {
    var hour13 = hour13Input.val();
    localStorage.setItem("hour13", JSON.stringify(hour13));
    storeHour13();
    confirmationMessage.text('Appointment saved to local storage');
  }

  saveHour13Btn.on("click", saveHour13)

  function storeHour14 () {
    var hour14Store = JSON.parse(localStorage.getItem("hour14"));
    hour14Input.val(hour14Store);
  }

  function saveHour14() {
    var hour14 = hour14Input.val();
    localStorage.setItem("hour14", JSON.stringify(hour14));
    storeHour14();
    confirmationMessage.text('Appointment saved to local storage');
  }

  saveHour14Btn.on("click", saveHour14)

  function storeHour15 () {
    var hour15Store = JSON.parse(localStorage.getItem("hour15"));
    hour15Input.val(hour15Store);
  }

  function saveHour15() {
    var hour15 = hour15Input.val();
    localStorage.setItem("hour15", JSON.stringify(hour15));
    storeHour15();
    confirmationMessage.text('Appointment saved to local storage');
  }

  saveHour15Btn.on("click", saveHour15)

  function storeHour16 () {
    var hour16Store = JSON.parse(localStorage.getItem("hour16"));
    hour16Input.val(hour16Store);
  }

  function saveHour16() {
    var hour16 = hour16Input.val();
    localStorage.setItem("hour16", JSON.stringify(hour16));
    storeHour16();
    confirmationMessage.text('Appointment saved to local storage');
  }

  saveHour16Btn.on("click", saveHour16)

  function storeHour17 () {
    var hour17Store = JSON.parse(localStorage.getItem("hour17"));
    hour17Input.val(hour17Store);
  }

  function saveHour17() {
    var hour17 = hour17Input.val();
    localStorage.setItem("hour17", JSON.stringify(hour17));
    storeHour17();
    confirmationMessage.text('Appointment saved to local storage');
  }

  saveHour17Btn.on("click", saveHour17)

  //init function ensures that appointments that have been committed to local storage will be rendered when the page is loaded, not just when the save button is clicked
  function init() {
    storeHour9();
    storeHour10();
    storeHour11();
    storeHour12();
    storeHour13();
    storeHour14();
    storeHour15();
    storeHour16();
    storeHour17();
  }

  init();
  //gets current date from dayjs and formats it to day, month date, year
  //sets current date as text for currentDay element in html
  var currentDate = dayjs().format('dddd[,] MMMM D[,] YYYY');
  $('#currentDay').text(currentDate);
});
