// disable swipers on desktop
const breakpoint = window.matchMedia('(min-width:575px)')
let gallerySwiper
let frameSwiper
let equipmentSwiper
let examplesSwiper
let reviewsSwiper
const breakpointChecker = function () {
	if (breakpoint.matches === true) {
		if (gallerySwiper !== undefined) gallerySwiper.destroy(true, true)
		if (frameSwiper !== undefined) frameSwiper.destroy(true, true)
		if (equipmentSwiper !== undefined) equipmentSwiper.destroy(true, true)
		if (examplesSwiper !== undefined) examplesSwiper.destroy(true, true)
		if (reviewsSwiper !== undefined) reviewsSwiper.destroy(true, true)
	} else if (breakpoint.matches === false) {
		return enableSwiper()
	}
}
const enableSwiper = function () {
	gallerySwiper = new Swiper('.gallery__preview', {
		slidesPerView: 1,
		spaceBetween: 16,
		thumbs: {
			swiper: {
				el: '.gallery__swiper',
				slidesPerView: 4,
				spaceBetween: 16,
				slideToClickedSlide: true
			}
		}
	})

	frameSwiper = new Swiper('.frame__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 16
	})

	equipmentSwiper = new Swiper('.equipment__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 16
	})

	examplesSwiper = new Swiper('.examples', {
		slidesPerView: '1',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	})

	reviewsSwiper = new Swiper('.reviews', {
		slidesPerView: '1',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	})
}
breakpoint.addListener(breakpointChecker)
breakpointChecker()

// video controller
const playButtons = document.querySelectorAll('.video-controler')
playButtons.forEach((elem) => {
	elem.addEventListener('click', () => {
		elem.classList.add('active')
		elem.previousElementSibling.play()
	})

	elem.previousElementSibling.addEventListener('click', () => {
		if (elem.classList.contains('active')) {
			elem.classList.remove('active')
			elem.previousElementSibling.pause()
		}
	})
})
