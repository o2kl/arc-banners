var nameSpace = ARC || {};


(function () {
	"use strict";

	var timeline;
	var wrapper, clickThrough, logo, copy, cta, width, height, ids;

	nameSpace.init = function () {

		// Initialize any variables here
		ids = [];

		width = 160;
		height = 600;

		//SET IDs IN DOM TO GLOBAL VARIABLES
		var allElements = document.getElementsByTagName("*");
		//grabs all elements and makes them variables
		for (var q = 0; q < allElements.length; q++) {
			var el = allElements[q];
			if (el.id) {
				window[el.id] = document.getElementById(el.id);
				//separates what we don't want to hide initially
				if (el.id !== 'wrapper' && el.id !== 'click_through' && el.id !== 'bg') {
					ids.push(el);
				}
			}
		}

		// TweenMax.set("#allNums", { autoAlpha: 0 });
		TweenMax.set('#drawer', {y:height})
		TweenMax.set(["#bg-img"], { scale:0.8, x:-60, y:-30});
		TweenMax.set(['#copy-1'], { x: -width, y: 0, autoAlpha: 1 });
		TweenMax.set(['#copy-2'], { x: -width, y: 0, autoAlpha: 0 });
		TweenMax.set(['#logo',"#copy-3", "#copy-4"], { x: 0, autoAlpha: 0 });
		TweenMax.set(["#cta", "#code"], { autoAlpha: 0 });

		wrapper = nameSpace.$('#wrapper');
		clickThrough = document.getElementById('click_through');
		cta = nameSpace.$('#cta');
		/* end added by me */

		wrapper.addClass('show');

		nameSpace.initClickTag();
		nameSpace.initAnimation();

		if (nameSpace.useFallback()) {
			nameSpace.injectFallback();
		} else {
			nameSpace.startAnimation();
		}

		click_through.onmouseover = function () {
			TweenMax.to("#cta", 0.1, { scale: 1.1, y: 0, transformOrigin: "50% 90%", rotationZ: 0.01, force3D: true, rotationZ: 0.01, transformPerspective: 400 });
		};

		click_through.onmouseout = function () {
			TweenMax.to("#cta", 0.1, { scale: 1, force3D: true, z: 0.01, rotationZ: 0.01, transformPerspective: 400, y: 0 });
		};
	};

	nameSpace.initClickTag = function () {
		clickThrough.onclick = function () {
			window.open(window.clickTag);
		};
	};

	nameSpace.injectFallback = function () {
		var body = document.body;

		while (body.firstChild) {
			body.removeChild(body.firstChild);
		}

		var anchor = document.createElement('a');
		anchor.style.cursor = 'pointer';

		var img = new Image();
		img.src = './img/static.jpg';

		anchor.appendChild(img);
		anchor.onclick = function () { window.open(window.clickTag); };
		document.body.appendChild(anchor);
	};

	nameSpace.initAnimation = function () {
		// TweenMax can be used to set css
		// It will even take care of browser prefixes
		// TweenMax.set(logo, {x:100, y:50, opacity:0});

		timeline = new TimelineMax({
			delay: 0.5,
			onComplete: nameSpace.onAnimationComplete
		});

		timeline.pause();

		timeline
		
		.to(["#copy-1"], 0.7, { x: 0, transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Linear.easeInOut })

		// .to(["#copy-1"], 0.4, { transformPerspective: 400, autoAlpha: 0, force3D: true, rotationZ: 0.01, ease: Linear.easeInOut }, "+=2.4")
	
		.to(["#copy-2"], 0.7, { x: 0, transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Linear.easeInOut }, "+=1")

		.to(["#copy-1", "#copy-2", "#bg-img"], 0, { transformPerspective: 400, autoAlpha: 0, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=3")


			.to(["#copy-3"], 0.3, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.0")

			.to(["#copy-3"], 0.3, { transformPerspective: 400, autoAlpha: 0, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=1.7")

			.to(["#copy-4"], 0.3, { transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn }, "+=0.0")

			.to('#drawer', 0.5, {y:375, transformPerspective: 400, autoAlpha: 1, force3D: true, rotationZ: 0.01, ease: Power2.easeIn })

			.to('#logo', 0.4,{autoAlpha: 1, ease: Cubic.easeInOut } , '+=0.5')



			.to(["#cta", "#code"], 0, { autoAlpha: 1, ease: Cubic.easeInOut }, "+=0.5");
	};

	// function traceTime(){
	// 	console.log("slideTime: " + timeline.time());
	// }

	nameSpace.hideBg = function () {
			TweenMax.to('#bg', 0, {autoAlpha:0})
	}

	nameSpace.startAnimation = function () {
		// Code for animation		
		timeline.play();
		nameSpace.startBgImg();


		// TweenMax.delayedCall(	7.5, loop);


	};

	nameSpace.onAnimationComplete = function () {
		// Log duration of timeline
		console.log('Animation Duration: ' + timeline.time() + 's');

		// Show a CTA or any animations outside main timeline
		// TweenMax.from( cta, 0.4, { y: '110%' } );
		// TweenMax.to( cta, 0.4, { opacity: 1 } );
	};


	nameSpace.startBgImg = function() {
		var t = new TimelineMax;
		t.to('#bg-img', 2.6, {scale: 1, x:-65 ,y:-45, transformPerspective: 400, force3D: true, rotationZ: 0.01, ease: Linear.easeNone})
	}


})();

var count = 1;
function loop() {
	if (count < 2) {
		console.log(count);
		count++;
		ARC.init();
	}

}
	//

