function playcrush() { 
  document.getElementById("crush").play()
} 

function playkick_bass() { 
  document.getElementById("kick-bass").play()
} 

function playsnare() { 
  document.getElementById("snare").play()
} 

function playtom_1() { 
  document.getElementById("tom-1").play()
} 

function playtom_2() { 
  document.getElementById("tom-2").play()
} 

function playtom_3() { 
  document.getElementById("tom-3").play()
} 

function playtom_4() { 
  document.getElementById("tom-4").play()
} 
window.addEventListener("keypress", function(event){
  let x = (event.key);
  if (x == "w"){
    playcrush()
  }
  if (x == "a"){
    playkick_bass()
  }
  if (x == "s"){
    playsnare()
  }
  if (x == "d"){
    playtom_1()
  }
  if (x == "j"){
    playtom_2()
  }
  if (x == "k"){
    playtom_3()
  }
  if (x == "l"){
    playtom_4()
  }
});
