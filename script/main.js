"use strict";

/**
 * @name audioPlayMethod
 */
function audioPlayMethod() {
	var audioBtn = document.getElementById("music-btn-js");
	
	audioBtn.addEventListener("click", function () {
		var audioElem = document.getElementsByTagName("audio")[0];
		
		this.classList.toggle("active");
		
		if (audioElem.paused === true) {
			audioElem.play();
		} else {
			audioElem.pause();
			//audioElem.currentTime = 0;
		}
	});
}

/**
 * @name modalToggleMethod
 *
 * @param btnName
 * @param methodForTag
 * @param methodForElem
 */
function modalToggleMethod(btnName, methodForTag, methodForElem) {
	var btn = document.getElementsByClassName(btnName);
	
	for (var i in btn) {
		if (btn.hasOwnProperty(i)) {
			btn[i].addEventListener("click", function () {
				var arrStrTagsName = document.querySelectorAll("html, body"),
					modalElem = document.getElementById("modal");
				
				for (var i in arrStrTagsName) {
					if (arrStrTagsName.hasOwnProperty(i)) {
						arrStrTagsName[i].classList[methodForTag]("open-popup");
					}
				}
				
				modalElem.classList[methodForElem]("active");
			});
		}
	}
}

/**
 * @name isTouchDevice
 *
 * @returns {boolean|*}
 */
function isTouchDevice() {
	return ('ontouchstart' in window || navigator.maxTouchPoints) && window.innerWidth <= '1024';
}

function changeText() {
	var sloganTextElem = document.getElementsByClassName("slogan__subTitle_1")[0],
		sloganBtnElem = document.getElementsByClassName("slogan__btn")[0];
	
	if (isTouchDevice()) {
		sloganTextElem.innerText = "TAP ON THE TOUCH POINT TO REVEAL THE VIBE FEATURES";
		sloganBtnElem.innerText = "TAP HERE FOR OUR VIBE LAUNCH OFFER";
	}
}

function blockItemMobileModal() {
	var mainBlockElem = document.getElementsByClassName("circle-js"),
		close = document.getElementsByClassName("modal__close");
	
	/* open */
	for (var i = 0; i < mainBlockElem.length; i++) {
		mainBlockElem[i].addEventListener("click", function (ev) {
			//if (window.innerWidth < "991" || window.innerHeight < "768") {
			// console.log(document.getElementsByClassName("main__block-t")[0].style.display)
			if (window.innerWidth < "991") {
				var elem = ev.currentTarget,
					currentElemId = elem.getAttribute("data-link"),
					arrStrTagsName = document.querySelectorAll("html, body"),
					modalElem = document.querySelectorAll(".modal[data-id='" + currentElemId + "']")[0];
				
				for (var _i in arrStrTagsName) {
					if (arrStrTagsName.hasOwnProperty(_i)) {
						arrStrTagsName[_i].classList["add"]("open-popup");
					}
				}
				
				modalElem.classList.add("active");
			}
		});
	}
	
	/* close */
	
	var _loop = function _loop(_i2) {
		close[_i2].addEventListener("click", function () {
			var arrStrTagsName = document.querySelectorAll("html, body"),
				modalElem = document.getElementsByClassName("modal");
			
			for (var _i3 in arrStrTagsName) {
				if (arrStrTagsName.hasOwnProperty(_i3)) {
					arrStrTagsName[_i3].classList["remove"]("open-popup");
				}
			}
			for (var j = 0; j < modalElem.length; j++) {
				modalElem[_i2].classList["remove"]("active");
			}
		});
	};
	
	for (var _i2 = 0; _i2 < close.length; _i2++) {
		_loop(_i2);
	}
}


/**
 *
 */
(function () {
	/**/
	var au = document.getElementById("audio");
	au.currentTime = 0;
	au.play();
	
	audioPlayMethod();
	
	/**/
	modalToggleMethod("slogan__btn", "add", "add");
	modalToggleMethod("modal__close", "remove", "remove");
	
	document.querySelectorAll(".main__block-full > a")[0].addEventListener("click", function () {
		var arrStrTagsName = document.querySelectorAll("html, body"),
			modalElem = document.querySelectorAll(".modal_technical")[0];
		
		for (var i in arrStrTagsName) {
			if (arrStrTagsName.hasOwnProperty(i)) {
				arrStrTagsName[i].classList["add"]("open-popup");
			}
		}
		
		modalElem.classList["add"]("active");
	});
	
	/**/
	changeText();
	
	/**/
	blockItemMobileModal();
	
	hoverMusic();
	
	
})();

TweenMax.set(line_0, {drawSVG: "0%"});
TweenMax.set(line_1, {drawSVG: "100% 100%"});
TweenMax.set(line_2, {drawSVG: "0%"});
TweenMax.set(line_3, {drawSVG: "100% 100%"});
TweenMax.set('.main__block-p', {scale: 0});
TweenMax.set(".main__block-t:first-of-type", {alpha: .25, y: 10, color: "#ffffff", ease: Quad.easeInOut});
TweenMax.set(".main__block-t:last-of-type", {alpha: .25, y: -10, color: "#ffffff", ease: Quad.easeInOut});

/*
document.getElementsByClassName('main__block-0')[0].getElementsByClassName('main__block-btn')[0].addEventListener("mouseover", showLine)
document.getElementsByClassName('main__block-0')[0].getElementsByClassName('main__block-btn')[0].addEventListener("mouseout", hideLine)
document.getElementsByClassName('main__block-1')[0].getElementsByClassName('main__block-btn')[0].addEventListener("mouseover", showLine)
document.getElementsByClassName('main__block-1')[0].getElementsByClassName('main__block-btn')[0].addEventListener("mouseout", hideLine)
document.getElementsByClassName('main__block-2')[0].getElementsByClassName('main__block-btn')[0].addEventListener("mouseover", showLine)
document.getElementsByClassName('main__block-2')[0].getElementsByClassName('main__block-btn')[0].addEventListener("mouseout", hideLine)
document.getElementsByClassName('main__block-3')[0].getElementsByClassName('main__block-btn')[0].addEventListener("mouseover", showLine)
document.getElementsByClassName('main__block-3')[0].getElementsByClassName('main__block-btn')[0].addEventListener("mouseout", hideLine)*/
document.getElementsByClassName('main__block-0')[0].getElementsByClassName('main__block-c-wrap')[0].addEventListener("mouseover", showLine)
document.getElementsByClassName('main__block-0')[0].getElementsByClassName('main__block-c-wrap')[0].addEventListener("mouseout", hideLine)
document.getElementsByClassName('main__block-1')[0].getElementsByClassName('main__block-c-wrap')[0].addEventListener("mouseover", showLine)
document.getElementsByClassName('main__block-1')[0].getElementsByClassName('main__block-c-wrap')[0].addEventListener("mouseout", hideLine)
document.getElementsByClassName('main__block-2')[0].getElementsByClassName('main__block-c-wrap')[0].addEventListener("mouseover", showLine)
document.getElementsByClassName('main__block-2')[0].getElementsByClassName('main__block-c-wrap')[0].addEventListener("mouseout", hideLine)
document.getElementsByClassName('main__block-3')[0].getElementsByClassName('main__block-c-wrap')[0].addEventListener("mouseover", showLine)
document.getElementsByClassName('main__block-3')[0].getElementsByClassName('main__block-c-wrap')[0].addEventListener("mouseout", hideLine)

function showLine(e) {
	var block = e.target.parentElement;
	var id = block.getAttribute('data-link');
	var line = document.getElementById('line_' + id);
	var dot = block.parentElement.getElementsByClassName('main__block-p')[0];
	
	TweenMax.to(".main__block-full", 1, {alpha: 0, ease: Quint.easeOut});
	
	TweenMax.to(block.parentElement, .6, {alpha: 1, ease: Quad.easeOut});
	TweenMax.to(".main__block-" + id + " .main__block-t:first-of-type", .6, {alpha: 1, y: 0, color: "#9c5833", ease: Quart.easeOut});
	TweenMax.to(".main__block-" + id + " .main__block-t:last-of-type", .6, {alpha: 1, y: 0, color: "#ffffff", ease: Quart.easeOut});
	TweenMax.to(".main__block-" + id + " .main__block-c_color", .6, {alpha: 1, ease: Quart.easeOut});
	
	if ((id == '0') || (id == '2')) {
		TweenMax.to(line, .6, {drawSVG: "100%", ease: Quad.easeOut});
	} else {
		TweenMax.to(line, .6, {drawSVG: "0% 100%", ease: Quad.easeOut});
	}
	
	dot.style.opacity = 1;
	TweenMax.to(dot, .7, {delay: 0.5, scale: 1, ease: Back.easeOut})
	
	line.style.visibility = "visible";
	
	var sfxElem = document.getElementById("sfx");
	// console.log(sfxElem);
	sfxElem.currentTime = 0;
	sfxElem.play();
}

function hideLine(e) {
	var block = e.target.parentElement;
	var id = block.getAttribute('data-link');
	var line = document.getElementById('line_' + id);
	var dot = block.parentElement.getElementsByClassName('main__block-p')[0];
	
	TweenMax.to(".main__block-full", 1, {alpha: 1, ease: Quint.easeOut});
	
	TweenMax.to(block.parentElement, .6, {alpha: .5, ease: Quad.easeOut});
	TweenMax.to(".main__block-" + id + " .main__block-t:first-of-type", .4, {alpha: .25, y: 10, color: "#ffffff", ease: Quad.easeInOut});
	TweenMax.to(".main__block-" + id + " .main__block-t:last-of-type", .4, {alpha: .25, y: -10, color: "#ffffff", ease: Quad.easeInOut});
	TweenMax.to(".main__block-" + id + " .main__block-c_color", .4, {alpha: 0, ease: Quad.easeInOut});
	
	if ((id == '0') || (id == '2')) {
		TweenMax.to(line, .5, {drawSVG: "0%", ease: Quad.easeOut});
	} else {
		TweenMax.to(line, .5, {drawSVG: "100% 100%", ease: Quad.easeOut});
	}
	
	TweenMax.to(dot, .3, {delay: 0, scale: 0, overwrite: true})
}


function startAnimation() {
	var tl = new TimelineMax({})
	var dot_tl = new TimelineMax({repeat: -1, repeatDelay: 1, paused: true})
	
	var str_vaperempire = [char1, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11];
	
	tl.fromTo(circ, 1, {alpha: 0, transformOrigin: "50% 50%"}, {alpha: 1, ease: Quint.easeOut}, .3);
	tl.fromTo(circ_v, 1, {alpha: 0, transformOrigin: "50% 50%"}, {alpha: 1, ease: Quint.easeOut}, .3);
	tl.fromTo(circ_e, 1, {alpha: 0, transformOrigin: "50% 50%"}, {alpha: 1, ease: Quint.easeOut}, .3);
	tl.fromTo(circ_line, 1, {scaleX: 0, transformOrigin: "50% 50%"}, {scaleX: 1, ease: Quint.easeOut}, .3);
	for (var i = 0; i < str_vaperempire.length; i++) {
		tl.fromTo(str_vaperempire[i], .8, {scaleX: 0, transformOrigin: "50% 50%"}, {scaleX: 1, ease: Quint.easeOut}, .5 + i / 10)
	}
	tl.fromTo(char_line, .7, {scaleX: 0, transformOrigin: "0% 50%"}, {scaleX: 1, ease: Quint.easeOut}, 1.6);
	tl.fromTo(".logotype__line", 1, {scaleX: 0, transformOrigin: "50% 50%"}, {scaleX: 1, ease: Quint.easeOut}, 1.8);
	tl.fromTo(".logotype__text", 1.5, {y: 10, alpha: 0, transformOrigin: "50% 50%"}, {y: 0, alpha: 1, ease: Quint.easeOut}, 1.8);
	
	tl.to(logotype, 1, {y: -200, alpha: 0, rotationX: 10, z: -50, ease: Quint.easeIn}, 3 + 3)
	
	tl.set(".slogan__wrap", {visibility: "visible"}, 3 + 3)
	
	tl.set(smoke_canvas, {visibility: "visible"}, 3 + 3)
	tl.fromTo(smoke_canvas, 2, {alpha: 0, y: 300}, {alpha: 1, y: 0}, 3 + 3);
	
	
	tl.fromTo(slogan_title, 1, {alpha: 0, y: -100, transformOrigin: "50% 50%"}, {alpha: 1, y: 0, ease: Quint.easeOut}, 3.8 + 3);
	tl.fromTo(".slogan__line", .7, {scaleX: 0, transformOrigin: "50% 50%"}, {scaleX: 1, ease: Quint.easeOut}, 4 + 3);
	tl.fromTo(".slogan__subTitle_0", 1, {alpha: 0, y: 20, transformOrigin: "50% 50%"}, {alpha: 1, y: 0, ease: Quint.easeOut}, 4.1 + 3);
	tl.fromTo(".slogan__subTitle_1", 1, {alpha: 0, y: 20, transformOrigin: "50% 50%"}, {alpha: 1, y: 0, ease: Quint.easeOut}, 4.2 + 3);
	tl.fromTo("#slogan-btn-js", 1, {alpha: 0, y: 20, transformOrigin: "50% 50%"}, {alpha: 1, y: 0, ease: Quint.easeOut}, 4.3 + 3);
	tl.fromTo(".slogan__text", 1, {alpha: 0, y: 20, transformOrigin: "50% 50%"}, {alpha: 1, y: 0, ease: Quint.easeOut}, 4.3 + 3.2);
	
	tl.set(".bottom", {visibility: "visible"}, 3 + 3)
	
	tl.fromTo(".main__img-vibe", 3, {alpha: 0, y: 300, transformOrigin: "50% 50%"}, {alpha: 1, y: 0, ease: Quint.easeOut}, 3.8 + 3);
	
	tl.fromTo(".main__block-0", 1, {alpha: 0, x: -100, transformOrigin: "50% 50%"}, {visibility: "visible", alpha: 0.5, x: 0, ease: Quint.easeOut}, 4.8 + 3);
	tl.fromTo(".main__block-1", 1, {alpha: 0, x: 100, transformOrigin: "50% 50%"}, {visibility: "visible", alpha: 0.5, x: 0, ease: Quint.easeOut}, 4.8 + 3);
	tl.fromTo(".main__block-2", 1, {alpha: 0, x: -100, transformOrigin: "50% 50%"}, {visibility: "visible", alpha: 0.5, x: 0, ease: Quint.easeOut}, 4.8 + 3);
	tl.fromTo(".main__block-3", 1, {alpha: 0, x: 100, transformOrigin: "50% 50%"}, {visibility: "visible", alpha: 0.5, x: 0, ease: Quint.easeOut}, 4.8 + 3);
	tl.fromTo(".main__block-full", .1, {alpha: 0, y: 0}, {visibility: "visible", alpha: 1, x: 0, ease: Quint.easeOut}, 4.8 + 3);
	tl.fromTo(feature_dot_a, .6, {scale: 0}, {visibility: "visible", scale: 1, ease: Quint.easeOut}, 4.8 + 3.5);
	tl.fromTo(feature_dot, 1.1, {scale: 0}, {visibility: "visible", scale: 1, x: 0, ease: Elastic.easeOut}, 4.8 + 3.7);
	tl.fromTo(feature_text, 1, {alpha: 0, y: -10}, {visibility: "visible", alpha: .7, y: 0, ease: Quint.easeOut}, 4.8 + 4.2);
	
	tl.set(".logotype", {visibility: "visible"}, 0)
	tl.set(".main__block", {visibility: "hidden"}, 0)
	
	tl.call(animateDot, [dot_tl], null, 10)
	
	
	dot_tl.to(feature_dot, .2, {scale: 1.1, ease: Sine.easeOut})
		.to(feature_dot, 1, {scale: 1, ease: Elastic.easeOut})
	
	
}

function animateDot(tl) {
	tl.paused(false);
}

function hoverMusic() {
	var btn = document.getElementsByTagName("button"),
		sfxElem = document.getElementById("sfx");
	
	for (var i in btn) {
		if (btn.hasOwnProperty(i)) {
			btn[i].addEventListener("mouseover", function () {
				sfxElem.currentTime = 0;
				sfxElem.play();
			});
		}
	}
}

document.getElementById('feature_dot_a').addEventListener("mouseover", function () {
	var sfxElem = document.getElementById("sfx");
	sfxElem.currentTime = 0;
	sfxElem.play();
});


//////********        BOTTOM SMOKE                *******//////////


var canvasWidth = 2000;
var canvasHeight = 200;

var pCount = 0;


var pCollection = new Array();

var puffs = 1;
var particlesPerPuff = 2000;
var img = './image/smoke.png';

var smokeImage = new Image();
smokeImage.src = img;

function runParticles() {
	for (var i1 = 0; i1 < puffs; i1++) {
		var puffDelay = i1 * 1500; //300 ms between puffs
		
		for (var i2 = 0; i2 < particlesPerPuff; i2++) {
			addNewParticle((i2 * 50) + puffDelay);
		}
	}
	
	draw(new Date().getTime(), 3000)
}

runParticles()


function addNewParticle(delay) {
	
	var p = {};
	p.top = canvasHeight;
	p.left = randBetween(-200, 800);
	
	p.start = new Date().getTime() + delay;
	p.life = 3000;
	p.speedUp = 90;
	
	
	p.speedRight = randBetween(0, 20);
	
	p.rot = randBetween(-1, 1);
	p.red = Math.floor(randBetween(0, 255));
	p.blue = Math.floor(randBetween(0, 255));
	p.green = Math.floor(randBetween(0, 255));
	
	
	p.startOpacity = .53
	p.newTop = p.top;
	p.newLeft = p.left;
	p.size = 300;
	p.growth = 10;
	
	pCollection[pCount] = p;
	pCount++;
	
}

function draw(startT, totalT) {
	//Timing
	var timeDelta = new Date().getTime() - startT;
	var stillAlive = false;
	
	//Grab and clear the canvas
	var c = document.getElementById("smoke_canvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	c.width = c.width;
	
	//Loop through particles
	for (var i = 0; i < pCount; i++) {
		//Grab the particle
		var p = pCollection[i];
		
		//Timing
		var td = new Date().getTime() - p.start;
		var frac = td / p.life
		
		if (td > 0) {
			if (td <= p.life) {
				stillAlive = true;
			}
			
			//attributes that change over time
			var newTop = p.top - (p.speedUp * (td / 1000));
			var newLeft = p.left + (p.speedRight * (td / 1000));
			var newOpacity = Math.max(p.startOpacity * (1 - frac), 0);
			
			var newSize = p.size + (p.growth * (td / 1000));
			p.newTop = newTop;
			p.newLeft = newLeft;
			
			//Draw!
			ctx.fillStyle = 'rgba(150,150,150,' + newOpacity + ')';
			ctx.globalAlpha = newOpacity;
			ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
		}
	}
	
	
	//Repeat if there's still a living particle
	if (stillAlive) {
		requestAnimationFrame(function () {
			draw(startT, totalT);
		});
	}
	else {
		clog(timeDelta + ": stopped");
		runParticles()
	}
	
}

function randBetween(n1, n2) {
	var r = (Math.random() * (n2 - n1)) + n1;
	return r;
}

function randOffset(n, variance) {
	//e.g. variance could be 0.1 to go between 0.9 and 1.1
	var max = 1 + variance;
	var min = 1 - variance;
	var r = Math.random() * (max - min) + min;
	return n * r;
}

function clog(s) {
	// console.log(s);
	
}


startAnimation()