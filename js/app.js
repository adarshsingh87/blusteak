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
			if ($(this).scrollTop() > winH * 0.1) {
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
// CSS animation maps:
const rotateH = {
	transform: 'rotateZ(90deg)',
	left: 0,
}
const rotateH_Rev = {
	transform: 'rotateZ(0deg)',
	top: '50%',
}
const rotateV = {
	transform: 'rotateZ(90deg)',
	top: 0,
}

// Wait for DOM content to be loaded:
$(function () {
	$('li').on('click', '.inactive', (evt) => {
		const $currTarg = $(evt.currentTarget),
			$accordion = $currTarg.next('.accordion'),
			$lineH = $currTarg.find('.line-h')
		$('h4.active').trigger('click')
		$lineH.css(rotateH)
		setTimeout(() => {
			$lineH.parent().css({ transform: 'rotateZ(90deg)' })
			$currTarg.toggleClass('inactive active')
		}, 250)
	})

	$('li').on('click', '.active', (evt) => {
		const $currTarg = $(evt.currentTarget),
			$accordion = $currTarg.next('.accordion'),
			$lineH = $currTarg.find('.line-h')
		$currTarg.find('.glyph-wrapper').css({ transform: 'rotateZ(-90deg)' })
		setTimeout(() => {
			$lineH.css(rotateH_Rev)
			$currTarg.toggleClass('inactive active')
		}, 250)
	})

	$('.default').trigger('click')
} )


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
