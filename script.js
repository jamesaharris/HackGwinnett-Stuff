


function buttonClick(){
  var initial = document.getElementById("Weight").value;

  var desired = document.getElementById("DWeight").value;

  var gender = document.getElementById("Gender").value;
  
  var difference = desired - initial

  var timeSpan = difference

  if (gender === "Male") {
    var maintenance = 15 * initial;
  } else {
    var maintenance = 14 * initial;
}

  if (difference > 0){
    var dailyCalories = maintenance + 500
  }else if (difference < 0){
    var dailyCalories = maintenance - 500
  }else{
    dailyCalories = maintenance
  }
 

  alert("Your daily calories should be " + dailyCalories + ". Following this reccomendation will get you to your desired weight in approxamently " + Math.abs(timeSpan) + " weeks.")
}