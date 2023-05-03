const breakpoint = window.matchMedia('(min-width:575px)')
let gallerySwiper
let frameSwiper
const breakpointChecker = function () {
	if (breakpoint.matches === true) {
		if (gallerySwiper !== undefined) gallerySwiper.destroy(true, true)
		if (frameSwiper !== undefined) frameSwiper.destroy(true, true)
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
				slideToClickedSlide: true,
			}
		}
	})
	frameSwiper = new Swiper('.frame__swiper', {
		slidesPerView: 1,
		spaceBetween: 16
	})
}
breakpoint.addListener(breakpointChecker)
breakpointChecker()
