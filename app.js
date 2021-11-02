
// hex color code genertaor function
 function getHexColorCode(){
 	let bgBody = document.getElementById('main');
 	let symbols =[0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
 	let bgColor = "#";

 	for(let i=0; i<6; i++)
 	{
 		bgColor+= symbols[Math.floor(Math.random() * 16)]; // generating random value from array using random
 	}
 	bgBody.style.backgroundColor = bgColor;
 	document.getElementById('code').textContent = bgColor;
 }
// rgb color code generator function
   function getRGBColorCode(){
   	let bgBody = document.getElementById('main');
   	let red = Math.floor(Math.random() * 255);
   	let green = Math.floor(Math.random() * 255);
   	let blue = Math.floor(Math.random() * 255);

   	let bgColor = `rgb( ${red}, ${green}, ${blue})`;
   	bgBody.style.backgroundColor = bgColor;
   	document.getElementById('code').textContent = bgColor;


   }
// rgba color code generator function
   function getRGBAColorCode(){
   	let bgBody = document.getElementById('main');
   	let red = Math.floor(Math.random() * 255);
   	let green = Math.floor(Math.random() * 255);
   	let blue = Math.floor(Math.random() * 255); 
   	let alpha = Math.random().toFixed(1);

   	let bgColor =  `rgb( ${red}, ${green}, ${blue}, ${alpha})`;
   	bgBody.style.backgroundColor = bgColor;
   	document.getElementById('code').textContent = bgColor;

   }