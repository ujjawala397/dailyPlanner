var eventBlock = ["", "", ""];


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  

//   <!--5. When save is clicked, text is saved to localstorage  -->
// create a queryselectorall for the save buttons
// create event listner for save button
// capture the text in a variable
// save text to localstorage 
// innerHTML means it will save to the screen 
// local 



var savedBtn = document.querySelectorAll(".saveBtn");

for (var i = 0; i < savedBtn.length; i++) {
    console.log(savedBtn[i])
    savedBtn[i].addEventListener("click", function(){
      var eventText = $(this).siblings("textarea").val();
      console.log(eventText);
      localStorage.setItem("data", eventText);
      $("textarea").html()=localStorage.getItem("data");
    });
}
// stored everything into the full date variable 
// We are trying to get the month alone
// we are setting all the values(day, month, year) to one variable 
var fullDate = new Date()
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
document.getElementById("datepicker").innerHTML=currentDate
// one line 46 we stored the data into the data variable 
// we are printing it on the indexhtml file 

// storing the current hour 
// set variable and connected the variable to the class"row" 
// We are settingg the current time equal to .Localestring 
// 
var rows = document.getElementsByClassName("row");
// var currentTime = fullDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
// console.log(currentTime)
var currentHour=parseInt(fullDate.getHours());
console.log(currentHour)

//--------------------------------------
function setColor(element, color) {
  element.style.backgroundColor = color;
}

Array.from(rows).forEach(row => {
  var rowIdString = row.id;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
    if(rowHour<=6 ){
      rowHour+=12
    }
    if(currentHour<=6){
      currentHour+=12
    }
    console.log("currentHour = "+currentHour+" Row Hour = "+rowHour)
    if(rowHour<currentHour){
      setColor(row, "grey");
    }
    if(rowHour==currentHour){
      setColor(row,"green")
    }
    else if(rowHour>currentHour){
      setColor(row,"skyblue")
    }
  }
});
//--------------------------------------
