
var countDownDate = new Date("April 11, 2020 12:00:00").getTime();

var x = setInterval(function() {
	
	var now = new Date().getTime();
	
	var distance = countDownDate - now;
	
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("days").innerHTML = "NE";
		document.getElementById("hours").innerHTML = "XT";
		document.getElementById("minutes").innerHTML = "DA";
		document.getElementById("seconds").innerHTML = "TE";
	}
}, 1000);

function winScrollTop() {
	window.scrollTo(0,0);
}

const buttonNext = document.getElementById('aside-btn-next');
const buttonBack = document.getElementById('aside-btn-back');

buttonNext.onclick = function() {
	document.getElementById('aside-container').scrollLeft += 624;
}

buttonBack.onclick = function() {
	document.getElementById('aside-container').scrollLeft -= 624;
}




if (screen.width >= 1470) {
	let imageTracker = 'imageOne';
	const imgOne = document.getElementById('car-one');
	const imgTwo = document.getElementById('car-two');
	const imgThree = document.getElementById('car-three');
	const imgFour = document.getElementById('car-four');
	const imgFive = document.getElementById('car-five');
	const imgSix = document.getElementById('car-six');
	const carBtn = document.getElementById('car-button');
	const imgWrapper = document.getElementById('car-gallery-images');
	const redStripe = document.getElementById('red-stripe');
	imgSix.style.opacity = '0.6';
	imgOne.style.opacity = '1';
	redStripe.style.zIndex = '5;'
	
	function changeImage() {
		
		let backgroundImage = document.getElementById('om-bilen');
		backgroundImage.style.backgroundSize = 'cover';
		backgroundImage.style.backgroundPosition = 'bottom center';
		backgroundImage.style.mixBlendMode = 'multiply';
		
		if (imageTracker == 'imageOne') {
			backgroundImage.style.backgroundImage = `url(../pictures/background-1@2x.png)`;
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '1';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			imageTracker = 'imageTwo';
			
			redStripe.style.left = '236px';
		} 
		else if (imageTracker == 'imageTwo') {
			backgroundImage.style.backgroundImage = `url(../pictures/henrik-hjortshoj-7DWnTxE-XY0-unsplash-1@2x.png)`;
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '1';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			
			imgWrapper.scrollLeft += 237;
			
			imageTracker = 'imageThree';
		} 
		else if (imageTracker == 'imageThree') {
			backgroundImage.style.backgroundImage = `url(../pictures/background@2x.png)`;
			imageTracker = 'imageFour';
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '1';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			backgroundImage.style.backgroundPosition = 'center center';
			redStripe.style.left = '234px';
			imgWrapper.scrollLeft += 237;
		} 
		else if (imageTracker == 'imageFour') {
			backgroundImage.style.backgroundImage = `url(../pictures/background-1@2x.png)`;
			imageTracker = 'imageFive';
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '1';
			imgSix.style.opacity = '0.6;'
			backgroundImage.style.backgroundPosition = 'center center';
			
			redStripe.style.left = '240px';
			
			imgWrapper.scrollLeft += 250;
		} 
		else if (imageTracker == 'imageFive') {
			backgroundImage.style.backgroundImage = `url(../pictures/henrik-hjortshoj-7DWnTxE-XY0-unsplash-1@2x.png)`;
			imageTracker = 'imageSix';
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '1';
			backgroundImage.style.backgroundPosition = 'center center';
			
			redStripe.style.left = '477px';
			
		} 
		else {
			backgroundImage.style.backgroundImage = `url(../pictures/background@2x.png)`;
			imageTracker = 'imageOne';
			imgOne.style.opacity = '1';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			backgroundImage.style.backgroundPosition = 'center center';
			
			redStripe.style.left = '0';
			
			imgWrapper.scrollLeft -= 1416;
		} 
	}
	
	function winScrollOne() {
		window.scrollTo(0,1130);
	}

	function winScrollTwo() {
		window.scrollTo(0,1697);
	}

	function winScrollThree() {
		window.scrollTo(0,2170);
	}

	function winScrollFour() {
		window.scrollTo(0,3320);
	}
}

if (screen.width >= 1025 && screen.width <= 1469) {
	let imageTracker = 'imageOne';
	const imgOne = document.getElementById('car-one');
	const imgTwo = document.getElementById('car-two');
	const imgThree = document.getElementById('car-three');
	const imgFour = document.getElementById('car-four');
	const imgFive = document.getElementById('car-five');
	const imgSix = document.getElementById('car-six');
	const carBtn = document.getElementById('car-button');
	const imgWrapper = document.getElementById('car-gallery-images');
	
	const redStripe = document.getElementById('red-stripe');
	imgSix.style.opacity = '0.6';
	imgOne.style.opacity = '1';
	redStripe.style.zIndex = '5;'
	
	function changeImage() {
		
		let backgroundImage = document.getElementById('om-bilen');
		backgroundImage.style.backgroundSize = 'cover';
		backgroundImage.style.backgroundPosition = 'bottom center';
		backgroundImage.style.mixBlendMode = 'multiply';
		
		if (imageTracker == 'imageOne') {
			backgroundImage.style.backgroundImage = `url(../pictures/background-1@2x.png)`;
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '1';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			imageTracker = 'imageTwo';
			
			redStripe.style.left = '236px';
		} 
		else if (imageTracker == 'imageTwo') {
			backgroundImage.style.backgroundImage = `url(../pictures/henrik-hjortshoj-7DWnTxE-XY0-unsplash-1@2x.png)`;
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '1';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			
			imgWrapper.scrollLeft += 237;
			
			imageTracker = 'imageThree';
		} 
		else if (imageTracker == 'imageThree') {
			backgroundImage.style.backgroundImage = `url(../pictures/background@2x.png)`;
			imageTracker = 'imageFour';
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '1';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			backgroundImage.style.backgroundPosition = 'center center';
			
			redStripe.style.left = '234px';
			
			imgWrapper.scrollLeft += 237;
		} 
		else if (imageTracker == 'imageFour') {
			backgroundImage.style.backgroundImage = `url(../pictures/background-1@2x.png)`;
			imageTracker = 'imageFive';
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '1';
			imgSix.style.opacity = '0.6;'
			backgroundImage.style.backgroundPosition = 'center center';
			redStripe.style.left = '241px';
			imgWrapper.scrollLeft += 250;
		} 
		else if (imageTracker == 'imageFive') {
			backgroundImage.style.backgroundImage = `url(../pictures/henrik-hjortshoj-7DWnTxE-XY0-unsplash-1@2x.png)`;
			imageTracker = 'imageSix';
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '1;'
			backgroundImage.style.backgroundPosition = 'center center';
			
			redStripe.style.left = '477px';
		} 
		else {
			backgroundImage.style.backgroundImage = `url(../pictures/background@2x.png)`;
			imageTracker = 'imageOne';
			imgOne.style.opacity = '1';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			backgroundImage.style.backgroundPosition = 'center center';
			redStripe.style.left = '0';
			imgWrapper.scrollLeft -= 1416;
		} 
	}
	
	function winScrollOne() {
		window.scrollTo(0,1363);
	}

	function winScrollTwo() {
		window.scrollTo(0,1930);
	}

	function winScrollThree() {
		window.scrollTo(0,2403);
	}

	function winScrollFour() {
		window.scrollTo(0,3553);
	}
}


if (screen.width >= 768 && screen.width <= 1024) {
	const imgOne = document.getElementById('car-one');
	const imgTwo = document.getElementById('car-two');
	const imgThree = document.getElementById('car-three');
	const imgFour = document.getElementById('car-four');
	const imgFive = document.getElementById('car-five');
	const imgSix = document.getElementById('car-six');
	let backgroundImage = document.getElementById('om-bilen');
	imgTwo.style.opacity = '0.6';
	imgThree.style.opacity = '0.6';
	(function(){
		
		imgOne.addEventListener('click', function(){
			backgroundImage.style.backgroundImage = `url(../pictures/background@2x.png)`;
			backgroundImage.style.backgroundPosition = '73% bottom'
			imgOne.style.opacity = '1';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
		})
		
		imgTwo.addEventListener('click', function(){
			backgroundImage.style.backgroundImage = `url(../pictures/background-1@2x.png)`;
			backgroundImage.style.backgroundPosition = 'center bottom'
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '1';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			
			document.getElementById('car-gallery-images').scrollLeft += 201;
		})
		
		imgThree.addEventListener('click', function(){
			backgroundImage.style.backgroundImage = `url(../pictures/henrik-hjortshoj-7DWnTxE-XY0-unsplash-1@2x.png)`;
			backgroundImage.style.backgroundPosition = '40% bottom'
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '1';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			
			document.getElementById('car-gallery-images').scrollLeft += 201;
		})
		
		imgFour.addEventListener('click', function(){
			backgroundImage.style.backgroundImage = `url(../pictures/background@2x.png)`;
			backgroundImage.style.backgroundPosition = '73% bottom'
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '1';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '0.6;'
			document.getElementById('car-gallery-images').scrollLeft += 201;
			
			
		})
		
		imgFive.addEventListener('click', function(){
			backgroundImage.style.backgroundImage = `url(../pictures/background-1@2x.png)`;
			backgroundImage.style.backgroundPosition = 'center bottom'
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '1';
			imgSix.style.opacity = '0.6;'
		})
		
		imgSix.addEventListener('click', function(){
			backgroundImage.style.backgroundImage = `url(../pictures/henrik-hjortshoj-7DWnTxE-XY0-unsplash-1@2x.png)`;
			backgroundImage.style.backgroundPosition = '40% bottom'
			imgOne.style.opacity = '0.6';
			imgTwo.style.opacity = '0.6';
			imgThree.style.opacity = '0.6';
			imgFour.style.opacity = '0.6';
			imgFive.style.opacity = '0.6';
			imgSix.style.opacity = '1;'
		})
		
	})();
}



// function openModal() {
	// document.getElementById('myModal').style.display = 'block';
// }

// function closeModal() {
	// document.getElementById('myModal').style.display = 'none';
// }

// var slideIndex = 0;
// showSlides(slideIndex);
// showSlides calls the function showslides from under using the variable slideIndex as argument.
// slideIndex is just a number. In this case it set to 0, because when calling an array, the index starts at 0, meaning index 0 = image 1 of the array.


// function plusSlides(n) {
  // showSlides(slideIndex += n);
// }



// function showSlides(n) {
  
  // var slides = document.getElementsByClassName("mySlides");
  // if (n > slides.length-1) {slideIndex = 0}
  // if (n < 0) {slideIndex = slides.length-1}
  // for (i = 0; i < slides.length; i++) {
	  // slides[i].style.display = "none";
  // }
 
  // slides[slideIndex].style.display = "block";
// }

// var slides = document.getElementsByClassName("mySlides");
// console.log(slides.length);

function openModal() {
	document.getElementById('myModal').style.display = 'block'
}

function closeModal() {
	document.getElementById('myModal').style.display = 'none'
}

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n)
}

function showSlides(n) {
	var slides = document.getElementsByClassName('mySlides');
	if (n > slides.length - 1) {slideIndex=0};
	if (n < 0) {slideIndex = slides.length-1};
	for (i=0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	
	slides[slideIndex].style.display = 'block';
}

