//Next45: Mars Rover challenge by Wesley Sharman.

//list of codes i used to build:
//44,11N,MMRMRMMLMMLM
//88,12E,MMLMRMMRRMML
//55,22N,MMLMRMMRRMML

//the main function - everything happens on one click
$(".roverBtn").click(function() {
  var inputValue = $(".roverInput").val();

  //console log input
  console.log(inputValue);

  //split text input into arrays
  var biggerPic = new Array();
  biggerPic = inputValue.split(",");

  //console main array
  console.log(biggerPic);
  var temp = new Array();
  temp = inputValue.split("");

  //console log split array
  //console.log(temp);

  //console log grid values for multiplication
  console.log("Zone: X" + temp[0] + ", y"  + temp[1] +  ".");

  //get the commands only into an array to iterate through
  var commandsOnlyArr = new Array();
  commandsOnlyArr = biggerPic[2];

  //get grid size
  var multiply = parseInt(temp[0] * temp[1]);

  //push to html for ease of use
  var html="Zone Size:" + multiply +  ". Start Position: x" + temp[3] + ", y" + temp[4] + ", " + temp[5] + ". Commands: " + biggerPic[2] + ".";
  document.getElementById("output").innerHTML = html;

  //current vehicle position
  var vehicle = {
    position: [temp[3],temp[4]],
    direction: temp[5]
  };

  //the forward move function
  function Move(vehicle) {
    switch(vehicle.direction) {
      //change vehicle co-ords when moving North: x:stay, y:+1
      case 'N':
      vehicle.position[0],
      vehicle.position[1]++
      break;
      //change vehicle co-ords when moving East: x:+1, y:stay
      case 'E':
      vehicle.position[0]++,
      vehicle.position[1]
      break;
      //change vehicle co-ords when moving South: x:stay, y:-1
      case 'S':
      vehicle.position[0],
      vehicle.position[1]--
      break;
      //change vehicle co-ords when moving West: x:-1, y:stay
      case 'W':
      vehicle.position[0]--,
      vehicle.position[1]
      break;
    };
    //console.log("The move function was called");
  }

  //the left turn function and updating the direction
  function Left(vehicle) {
    switch(vehicle.direction) {
      case 'N':
      vehicle.direction = "W"
      break;
      case 'E':
      vehicle.direction = "N"
      break;
      case 'S':
      vehicle.direction = "E"
      break;
      case 'W':
      vehicle.direction = "S"
      break;
    };
    //console.log("The left function was called");
  }

  //the right turn function and updating the direction
  function Right(vehicle) {
    switch(vehicle.direction) {
      case 'N':
      vehicle.direction = "E"
      break;
      case 'E':
      vehicle.direction = "S"
      break;
      case 'S':
      vehicle.direction = "W"
      break;
      case 'W':
      vehicle.direction = "N"
      break;
    };
    //console.log("The right function was called");
  }

  //run the moving of the vehicle for each 'command'
  for (var i = 0; i < commandsOnlyArr.length; i++) {
    //vehicle movement
    switch (commandsOnlyArr[i]) {
      case "M": Move(vehicle);
      break;
      case "L": Left(vehicle);
      break;
      case "R": Right(vehicle);
      break;
    }
  }
  console.log("The vehicle's new position: [x" + vehicle.position[0] + ", y" + vehicle.position[1] + ", " + vehicle.direction + "]")

  //present final position on front-end
  $("#finalInfo").text("Vehicle's Position : x" + vehicle.position[0] + ", y" + vehicle.position[1] + " | Facing Direction: " + vehicle.direction);

  return false;
});
