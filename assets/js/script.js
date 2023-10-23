// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function storeHour9 () {
    var hour9Store = JSON.parse(localStorage.getItem("hour9"));
    hour9Input.val(hour9Store);
  }

  function saveHour9() {
    var hour9 = hour9Input.val();
    localStorage.setItem("hour9", JSON.stringify(hour9));
    storeHour9();
    confirmationMessage.text('Appointment saved to local storage');
  }

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
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('dddd[,] MMMM D[,] YYYY');
  $('#currentDay').text(currentDate);
});
