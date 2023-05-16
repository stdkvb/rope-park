// disable swipers on desktop

const mobile = window.matchMedia('(min-width:576px)')
const desktop = window.matchMedia('(min-width:1280px)')
let elementsSwiper
let gallerySwiper
let frameSwiper
let equipmentSwiper
let estimateSwiper
let examplesSwiper
let choiseSwiper
let reviewsSwiper

const mobileBreakpointChecker = function () {
	if (mobile.matches === true) {
		if (elementsSwiper !== undefined) gallerySwiper.destroy(true, true)
		if (gallerySwiper !== undefined) gallerySwiper.destroy(true, true)
		if (frameSwiper !== undefined) frameSwiper.destroy(true, true)
		if (equipmentSwiper !== undefined) equipmentSwiper.destroy(true, true)
		if (examplesSwiper !== undefined) examplesSwiper.destroy(true, true)
		if (choiseSwiper !== undefined) choiseSwiper.destroy(true, true)
		if (reviewsSwiper !== undefined) reviewsSwiper.destroy(true, true)
	} else if (mobile.matches === false) {
		return enableSwiperMobile()
	}
}

const desktopBreakpointChecker = function () {
	if (desktop.matches === true) {
		if (estimateSwiper !== undefined) estimateSwiper.destroy(true, true)
	} else if (desktop.matches === false) {
		return enableSwiperDesktop()
	}
}
const enableSwiperDesktop = function () {
	estimateSwiper = new Swiper('.estimate__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		}
	})
}
const enableSwiperMobile = function () {
	elementsSwiper = new Swiper('.elements-swiper', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		}
	})

	gallerySwiper = new Swiper('.gallery__preview', {
		slidesPerView: 1,
		spaceBetween: 16,
		thumbs: {
			swiper: {
				el: '.gallery__swiper',
				slidesPerView: 4,
				spaceBetween: 16,
				slideToClickedSlide: true,
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true
				}
			}
		}
	})

	frameSwiper = new Swiper('.frame__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		}
	})

	equipmentSwiper = new Swiper('.equipment__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		}
	})

	examplesSwiper = new Swiper('.examples', {
		slidesPerView: '1',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	})

	choiseSwiper = new Swiper('.choise__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
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
mobile.addListener(mobileBreakpointChecker)
desktop.addListener(desktopBreakpointChecker)
mobileBreakpointChecker()
desktopBreakpointChecker()

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
