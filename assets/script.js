var clockEl = $("#currentDay");
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
var saveBtnEl = $(".saveBtn");
var formEl = $('.container');
var formArea = document.querySelectorAll('#box');

storageInit();
renderColor();

function storageInit() {
     var storedToDos = JSON.parse(localStorage.getItem("toDo"));

     for (var j = 0; j < storedToDos.length; j++) {
          $(formArea[j]).text(storedToDos[j])
     }
     
}

function displayTime() {
     var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
     clockEl.text(rightNow);
}

function renderColor() {
     for (k = 0; k < formArea.length; k++) {
          if (moment() > moment('8:59:59 am', 'h:mm:ss a').add(k, 'hour')) {
          formArea[k].setAttribute('id', 'box-past');
          console.log(k)
          } else if (moment().startOf('hour').format('h') == moment().set('hour', 8).add(k, 'hour').format('h')) {
               formArea[k].setAttribute('id', 'box-present');
               console.log(k)
               }
        
}};


function saveItem(event) {
     var toDo = [""]
     event.preventDefault();
     for (var i = 0; i < formArea.length; i++) {
          var hourValue = $(formArea[i]).val();
          toDo.splice(i, 1, hourValue);
     }
     localStorage.setItem("toDo", JSON.stringify(toDo));
}

saveBtnEl.on("click", saveItem);
setInterval(displayTime, 1000);