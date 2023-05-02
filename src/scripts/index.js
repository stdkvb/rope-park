const breakpoint = window.matchMedia('(min-width:575px)')
let mySwiper
const breakpointChecker = function () {
	if (breakpoint.matches === true) {
		if (mySwiper !== undefined) mySwiper.destroy(true, true)
	} else if (breakpoint.matches === false) {
		return enableSwiper()
	}
}

const enableSwiper = function () {
	mySwiper = new Swiper('.gallery__preview', {
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
}
breakpoint.addListener(breakpointChecker)
breakpointChecker()
