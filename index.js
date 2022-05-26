
function myFunction() {
  let input = document.getElementById('same-in-all');
 
  let meters = document.getElementById('meters');
  meters.innerText = input.value;

  let metersToFeet = document.getElementById('meters-to-feet');
  metersToFeet.innerHTML = (meters.innerText * 3.28084).toFixed(3);

  let feet = document.getElementById('feet');
  feet.innerHTML = input.value;

  let feetToMeters = document.getElementById('feet-to-meters');
  feetToMeters.innerHTML = (meters.innerText * 0.3048).toFixed(3);

  let liters = document.getElementById('liters');
  liters.innerHTML = input.value;

  let litersToGallons = document.getElementById('liters-to-gallons');
  litersToGallons.innerHTML = (meters.innerText * 0.264172).toFixed(3);

  let gallons = document.getElementById('gallons');
  gallons.innerHTML = input.value;

  let gallonsToLiters = document.getElementById('gallons-to-liters');
  gallonsToLiters.innerHTML = (meters.innerText * 3.785).toFixed(3);

  let kilos = document.getElementById('kilos');
  kilos.innerHTML = input.value;

  let kilosToPounds = document.getElementById('kilos-to-pounds');
  kilosToPounds.innerHTML = (meters.innerText * 2.205).toFixed(3);

  let pounds = document.getElementById('pounds');
  pounds.innerHTML = input.value;
  
  let poundsToKilos = document.getElementById('pounds-to-kilos');
  poundsToKilos.innerHTML = (meters.innerText * 0.453592).toFixed(3);
    
}


// let element = document.getElementById('same-in-all');
// element.innerText = 22;


// let meters = document.getElementById('meters');
// meters.innerHTML = element.innerText;

// let metersToFeet = document.getElementById('meters-to-feet');
// metersToFeet.innerHTML = (meters.innerText * 3.28084).toFixed(3);


// let feet = document.getElementById('feet');
// feet.innerHTML = element.innerText;

// let feetToMeters = document.getElementById('feet-to-meters');
// feetToMeters.innerHTML = (element.innerText * 0.3048).toFixed(3);




// let liters = document.getElementById('liters');
// liters.innerHTML = element.innerText;

// let litersToGallons = document.getElementById('liters-to-gallons');
// litersToGallons.innerHTML = (element.innerText * 0.264172).toFixed(3);


// let gallons = document.getElementById('gallons');
// gallons.innerHTML = element.innerText;

// let gallonsToLiters = document.getElementById('gallons-to-liters');
// gallonsToLiters.innerHTML = (element.innerText * 3.785).toFixed(3);





// let kilos = document.getElementById('kilos');
// kilos.innerHTML = element.innerText;

// let kilosToPounds = document.getElementById('kilos-to-pounds');
// kilosToPounds.innerHTML = (element.innerText * 2.205).toFixed(3);

// let pounds = document.getElementById('pounds');
// pounds.innerHTML = element.innerText;

// let poundsToKilos = document.getElementById('pounds-to-kilos');
// poundsToKilos.innerHTML = (element.innerText * 0.453592).toFixed(3);


