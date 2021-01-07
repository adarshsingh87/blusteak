// ! navbar
const navSlide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')
	const navLinks = document.querySelectorAll('.nav-links li')
	const navLinksAncor = document.querySelectorAll('.nav-links li a')
	// Toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active')
		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 5 + 0.3
				}s`
			}
		})
		//burger animation
		burger.classList.toggle('toggle')
	})
	navLinksAncor.forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-active')
			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = ''
				}
			})
			burger.classList.remove('toggle')
		})
	})
}

navSlide()

jQuery(function ($) {
	var $nav = $('.container-nav')
	var $win = $(window)
	var winH = $win.height() // Get the window height.

	$win
		.on('scroll', function () {
			if ($(this).scrollTop() > winH * 0.01) {
				$nav.addClass('doch')
			} else {
				$nav.removeClass('doch')
			}
		})
		.on('resize', function () {
			// If the user resizes the window
			winH = $(this).height() // you'll need the new height value
		})
})

// ! carousel
$('.pri-carousel').owlCarousel({
	stagePadding: 15,
	margin: 10,
	nav: true,
	navText: [
		'<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
		'<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
	],
	loop: true,
	responsive: {
		0: {
			items: 1,
		},
		640: {
			items: 2,
		},
		960: {
			items: 3,
		},
	},
})

$('.sec-carousel').owlCarousel({
	stagePadding: 15,
	margin: 10,
	nav: true,
	navText: [
		'<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
		'<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
	],
	loop: true,
	responsive: {
		0: {
			items: 1,
		},
		640: {
			items: 1,
		},
		960: {
			items: 1,
		},
	},
})

// ! faq accordian
$('.accordian').click(function () {
	$(this).toggleClass('open')
})


// ! img carousel

$('.img-carousel').owlCarousel({
	dots: false,
	stagePadding: 15,
	margin: 10,
	nav: false,
	loop: true,
	autoplay: true,
	autoplayTimeout: 1000,
  autoplayHoverPause: false,
	responsive: {
		0: {
			items: 2,
		},
		640: {
			items: 3,
		},
		960: {
			items: 5,
		},
	},
})

// ! counter animation
// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 2000) {
        $(window).off("scroll", startCounter);
        $('.count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}

// ! form submit

function submmitit() {
	var xhttp = new XMLHttpRequest()
	var formDataPair = []
	var formData = ''
	formDataPair.push('name' + '=' + document.getElementById('name').value)
	formDataPair.push('email' + '=' + document.getElementById('email').value)
	formDataPair.push(
		'phone' + '=' + document.getElementById('phnumber').value
	)
	formDataPair.push('position' + '=' + document.getElementById('position').value)
	formDataPair.push('budget' + '=' + document.getElementById('budget').value)
	formDataPair.push('enquiry' + '=' + document.getElementById('enquiry').value)
	formDataPair.push('message' + '=' + document.getElementById('message').value)
	formDataPair.push('found' + '=' + document.getElementById('found').value)
	formData = formDataPair.join('&').replace(/%20/g, '+')
	xhttp.open('POST', 'http://mail.blusteak.com/send.php')
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
	xhttp.send( formData )
	console.log(formData)
	console.log('submitted')
	document.querySelector('.form-submit-btn').innerHTML = 'Submitted'
}

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#b6b2b2"
      }
    },
    "opacity": {
      "value": 0.5211089197812949,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8.017060304327615,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 12.181158184520175,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#c8c8c8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
