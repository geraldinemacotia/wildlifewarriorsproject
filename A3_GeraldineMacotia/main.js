new fullpage('#fullpage', {
	autoScrolling: true,
	navigation: true,
	scrollHorizontally: true,
	navigationPosition: 'left',
	navigationTooltips: ['Home', 'Threats', 'Conservation Projects', 'Global Ambassadors', 'Donate'],
	showActiveTooltip: true,
	controlArrows: false,
	slidesNavigation: true,

	onLeave: function(origin, destination) {
		//To understand the difference between the current section (origin) and the destination
		// console.log("on leave!") 
		// console.log(destination)
		if (destination.index == 1) {
			threatSection(destination);
		} else if (destination.index == 2) {
			projectSection(destination);
		} else if (destination.index == 3) {
			globalSection(destination);
		} else if (destination.index == 4) {
			donateSection(destination);
		}
	},

	afterRender: function() {
		// console.log("home")
		homepageSection();
	},

});

/*Landing..........................................................................*/
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
	loader.style.display = "none";
});

anime({
	targets: '#demo-svg path',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutQuad',
	duration: 8000,
	direction: 'alternate',
	loop: true
});

/*Home section animations..........................................................................*/
//After the page loads
function homepageSection() {
	// console.log("home section")
	//Use gsap to create a timeline for animation
	const tl = new TimelineMax({
		delay: 0.5
	});

	//animate the elements
	tl.from('.logo', {
			x: -1000,
			scale: 0.1,
			opacity: 0,
			ease: 'ease-in',
			duration: 0.7
		})
		.from('.section_one .social', {
			y: 30,
			opacity: 0,
			duration: 1
		}, "-=1")
		.from('.section_one .text', {
			y: 30,
			opacity: 0,
			duration: 1
		}, "-=1")
		.from('.section_one #sound-btn', {
			y: 30,
			opacity: 0,
			duration: 1
		}, "-=1")
		.from('#fp-nav', {
			opacity: 0,
			duration: 1
		});

}

/*Threat section animations..........................................................................*/
function threatSection(destination) {
	// console.log("threat section")
	//get the elements
	let section = destination.item;
		// console.log(section) to return the section
		// let heading = section.querySelector('h1')
		// let paragraph = section.querySelector('.thrpara')
	let slide = section.querySelector('.slide');

	//animate the elements via timeline
	const tl = new TimelineMax({
		delay: 0.6
	});
	tl.from(slide, {
		duration: 1,
		y: 50,
		opacity: 0
	});
}

/*Project section animations..........................................................................*/
function projectSection(destination) {
	// console.log("project section")
	//get the elements
	let section = destination.item;
		// console.log(section) to return the section
		// let heading = section.querySelector('h1')
		// let paragraph = section.querySelector('.thrpara')
	let slide = section.querySelector('.slide');

	//animate the elements via timeline
	const tl = new TimelineMax({
		delay: 0.6
	});
	tl.from(slide, {
		duration: 1,
		y: 50,
		opacity: 0
	});
}

/*Global section animations..........................................................................*/
function globalSection(destination) {
	// console.log("project section")
	//get the elements
	let section = destination.item;
		// console.log(section) to return the section
		// let heading = section.querySelector('h1')
		// let paragraph = section.querySelector('.thrpara')
	let slide = section.querySelector('.slide');

	//animate the elements via timeline
	const tl = new TimelineMax({
		delay: 0.6
	});
	tl.from(slide, {
		duration: 1,
		y: 50,
		opacity: 0
	});
}

/*Donate section animations..........................................................................*/
function donateSection(destination) {
	// console.log("donate section")
	//get the elements
	let section = destination.item;
		// console.log(section) to return the section
		// let heading = section.querySelector('h1')
		// let paragraph = section.querySelector('.thrpara')
	let slide = section.querySelector('.slide');

	//animate the elements via timeline
	const tl = new TimelineMax({
		delay: 0.6
	});
	tl.from(slide, {
		duration: 1,
		y: 50,
		opacity: 0
	});
}

/*Audio.............................................................................*/
const bgMusic = new Audio('audio/earth.mp3');
const soundBtn = document.querySelector('#sound-btn');
soundBtn.addEventListener('click', () => {

	if (bgMusic.paused) {
		bgMusic.play();
		soundBtn.name = 'volume-up';
	} else {
		bgMusic.pause();
		soundBtn.name = 'volume-mute';
	}

});

/*Section global ambassadors.............................................................................*/
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
	image.addEventListener('click', e => {
		lightbox.classList.add('active');
		const img = document.createElement('img');
		img.src = image.src;
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild);
		}
		lightbox.appendChild(img);
	});
});

lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return;
	lightbox.classList.remove('active');
});

// Slide navigations for buttons (next and previous)
// next slide btn
let nextSlideBtn = document.querySelectorAll('.next-slide-btn');
nextSlideBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		fullpage_api.moveSlideRight();
	});
});

//previous slide btn
let prevSlideBtn = document.querySelectorAll('.prev-slide-btn');
prevSlideBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		fullpage_api.moveSlideLeft();
	});
});

// jump to section 4 btn
let jumptoS4Btns = document.querySelectorAll('.jumpto-s4');
jumptoS4Btns.forEach(btn => {
	btn.addEventListener('click', () => {
		fullpage_api.moveTo(5);
	});
});
