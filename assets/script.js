var currentDay = $('#currentDay');
var themeButton = $('#theme-btn');
var saveButton = $(".saveBtn");
var timeBlock = $(".time-block");

function displayTime() {
    var rightNow = moment().format('dddd MMMM DD, YYYY');
    currentDay.text(rightNow);
  }

displayTime();

