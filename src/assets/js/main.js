let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

 
});

const articlesSlider = new Swiper(".swiper.articles-slider", {
	speed: 1000,
	
	slidesPerView: 1,
	spaceBetween: 32,
	
	pagination: {
		el: '.pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40
		},
		640: {
			slidesPerView: 1.5,
			spaceBetween: 24
		},
		800: {
			slidesPerView: 2,
			spaceBetween: 24
		},
		1180: {
			slidesPerView: 3,
			spaceBetween: 32
		}
	}
})



const reviewsSliders = document.querySelectorAll('.swiper.reviews-slider');
if ( reviewsSliders.length ){
	reviewsSliders.forEach( rs => {
		const pagination = rs.querySelector('.pagination');

		const rsSwipers = new Swiper(rs, {
			speed: 1000,
			
			slidesPerView: 1.1,
			spaceBetween: 16,
			
			pagination: {
				el: pagination,
				clickable: true,
			},
			
			breakpoints: {
				480: {
					slidesPerView: 2.1,
					spaceBetween: 16
				},
				640: {
					slidesPerView: 2.1,
					spaceBetween: 16
				},
				900: {
					slidesPerView: 3.2,
					spaceBetween: 24
				},
				
			}
		})
	} )
}




const partnersSlider = new Swiper(".swiper.partners-slider", {
	speed: 1000,
	
	slidesPerView: 1.1,
	spaceBetween: 16,
	
	pagination: {
		el: '.swiper.partners-slider .pagination',
		clickable: true,
	},
	
	breakpoints: {
		480: {
			slidesPerView: 2.1,
			spaceBetween: 16
		},
		640: {
			slidesPerView: 2.1,
			spaceBetween: 16
		},
		900: {
			slidesPerView: 3.1,
			spaceBetween: 16
		},
		1200: {
			slidesPerView: 4.2,
			spaceBetween: 24
		},
		
	}
})


const vacanciesSlider = new Swiper(".swiper.vacancies-slider", {
	speed: 1000,
	
	slidesPerView: 1.1,
	spaceBetween: 16,
	
	
	
	breakpoints: {
		480: {
			slidesPerView: 2.1,
			spaceBetween: 16
		},
		640: {
			slidesPerView: 2.1,
			spaceBetween: 16
		},
		
		
	}
})





Fancybox.bind('[data-fancybox]', {
    compact: false,
    contentClick: "iterateZoom",
    Images: {
      Panzoom: {
        maxScale: 2,
      },
    },
    Toolbar: {
      display: {
        left: [
          "infobar",
        ],
        middle : [],
        right: [
          "iterateZoom",
          "close",
        ],
      }
    }
  });  


const mapPin = document.querySelectorAll('.map-pin');


  


if ( mapPin.length ){
	mapPin.forEach( mp => {
		mp.addEventListener('click', pinClick)
		
	} )
	

	let currentActivePin;

	function pinClick(){
		let pinIcon;
			if ( !this.classList.contains('pin-icon') ){

				let target = this.getAttribute('data-target');
				pinIcon = document.querySelector('.pin-icon[data-target="'+target+'"]');



				
			} else {
				pinIcon = this;
			}
				
			
			const container = document.querySelector('.map-container');
			const textMarker = document.querySelector('.map-text-marker');

			
			textMarker.classList.remove('active');


			const activePin = document.querySelectorAll('.map-pin.active-pin');

			const activeDots =  document.querySelectorAll('.active-dots');

			if (  activePin.length ){
				activePin.forEach( ap => ap.classList.remove('active-pin') );
			}

			if ( activeDots.length ){
				activeDots.forEach( ad => ad.classList.remove('active-dots'))
			}


			const targetDots = document.querySelectorAll(pinIcon.getAttribute('data-target'));

			if ( targetDots.length ){

				targetDots.forEach( td => td.classList.add('active-dots') )
				
			}

			

			const containerRect = container.getBoundingClientRect();
			const pinRect = pinIcon.getBoundingClientRect();
			const centerX = pinRect.left - containerRect.left + pinRect.width / 2;
			const centerY = pinRect.top - containerRect.top + pinRect.height / 2;
			textMarker.innerHTML = pinIcon.getAttribute('data-text');
			textMarker.style.top = (centerY - 210) + 'px';
			textMarker.style.left = centerX + 'px';

			textMarker.classList.add('active');

			currentActivePin = pinIcon;
			
	}


	function setStartActivePin( nodeLink = '.map-pin[data-target=".leningrad"]' ){
		let ap =  document.querySelector(nodeLink);

		const container = document.querySelector('.map-container');
		const textMarker = document.querySelector('.map-text-marker');

		const containerRect = container.getBoundingClientRect();
		const pinRect = ap.getBoundingClientRect();
		const centerX = pinRect.left - containerRect.left + pinRect.width / 2;
		const centerY = pinRect.top - containerRect.top + pinRect.height / 2;
		textMarker.innerHTML = ap.getAttribute('data-text');
		textMarker.style.top = (centerY - 210) + 'px';
		textMarker.style.left = centerX + 'px';

		textMarker.classList.add('active');

		currentActivePin = ap;

	}


	setStartActivePin();


	window.addEventListener('resize', function(){
		const container = document.querySelector('.map-container');
		const textMarker = document.querySelector('.map-text-marker');

		const containerRect = container.getBoundingClientRect();
		const pinRect = currentActivePin.getBoundingClientRect();
		const centerX = pinRect.left - containerRect.left + pinRect.width / 2;
		const centerY = pinRect.top - containerRect.top + pinRect.height / 2;
		
		textMarker.style.top = (centerY - 210) + 'px';
		textMarker.style.left = centerX + 'px';
	})
}



const historyPoints = document.querySelectorAll('.history-point');
const sliderYears = new Swiper(".swiper.years-slider", {
	
	direction: "vertical", // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	allowTouchMove: false 
});

const historyTextSlider = new Swiper(".history-text.swiper", {
	observer: true,
	direction: "vertical", // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	allowTouchMove: false 
});




if ( historyPoints.length ){
	historyPoints.forEach( (hp, index) => {
		hp.setAttribute('data-index', index);

		hp.addEventListener('click', function(){
			changeHistoryPoint( this, index )
		})
	} )
}

function changeHistoryPoint( point, index ){
	if ( !point.classList.contains( 'active' ) ){
		let activePoint = document.querySelector('.history-point.active');		
		let activeIndex = Number( activePoint.getAttribute('data-index') );

		activePoint.classList.remove('active');
		point.classList.add('active');


		let newActiveIndex = getActiveHistory();
		let historyPoints = document.querySelectorAll('.history-point');
		let historyPointsCount = historyPoints.length - 1 ;

		const prevHistory = document.querySelector('.history__prev');
		const nextHistory = document.querySelector('.history__next');

		if (  newActiveIndex  === 0 ){
			prevHistory.classList.add('disabled');
		} else {
			prevHistory.classList.remove('disabled');
		}

		if (  newActiveIndex  === historyPointsCount ){
			nextHistory.classList.add('disabled');
		} else {
			nextHistory.classList.remove('disabled');
		}

		sliderYears.slideTo(index, 1000, false)
		historyTextSlider .slideTo(index, 1000, false)
	}
}

function getActiveHistory(){
	let ap = document.querySelector('.history-point.active');
	return Number( ap.getAttribute('data-index') );
}

const prevHistory = document.querySelector('.history__prev');
const nextHistory = document.querySelector('.history__next');

if ( prevHistory ){
	prevHistory.addEventListener('click', function(){
		
		if ( !this.classList.contains('disabled') ){
			let currentActiveIndex = getActiveHistory();
			let historyPoints = document.querySelectorAll('.history-point');
			let historyPointsCount = historyPoints.length - 1 ;

			currentActiveIndex--;
			
			if ( currentActiveIndex === 0){
				this.classList.add('disabled');
			}
			
			historyPoints[currentActiveIndex].click();
			sliderYears.slideTo(currentActiveIndex, 1000, false)
			historyTextSlider .slideTo(currentActiveIndex, 1000, false)

		}


		
	})
}

if ( nextHistory ){
	nextHistory.addEventListener('click', function(){

		if ( !this.classList.contains('disabled') ){
			let currentActiveIndex = getActiveHistory();
			let historyPoints = document.querySelectorAll('.history-point');
			let historyPointsCount = historyPoints.length - 1 ;

			currentActiveIndex++;
			
			if ( currentActiveIndex === historyPointsCount){
				this.classList.add('disabled');
			}
			
			historyPoints[currentActiveIndex].click();
			sliderYears.slideTo(currentActiveIndex, 1000, false)
			historyTextSlider .slideTo(currentActiveIndex, 1000, false)

		}
	})
}



const historyTextContents = document.querySelectorAll('.history-text-content');
const swiperHistoryText = document.querySelector('.history-text.swiper');

if ( historyTextContents.length && swiperHistoryText ){
	
	let swiperHistoryTextSlides = document.querySelectorAll('.history-text.swiper .swiper-slide');


	let maxHeight = 0;

	historyTextContents.forEach( tc => {
		let h = tc.offsetHeight;

		if ( h > maxHeight ){
			maxHeight = h;
		}

	})

	swiperHistoryText.style.height = (maxHeight + 32) + 'px';

	swiperHistoryTextSlides.forEach( sl => {
		sl.style.height = (maxHeight + 32) + 'px'
	} )


	window.addEventListener('resize', function(){
		let swiperHistoryTextSlides = document.querySelectorAll('.history-text.swiper .swiper-slide');
		let maxHeight = 0;

		historyTextContents.forEach( tc => {
			let h = tc.offsetHeight;

			if ( h > maxHeight ){
				maxHeight = h;
			}

		})

		swiperHistoryText.style.height = (maxHeight + 32) + 'px';

		swiperHistoryTextSlides.forEach( sl => {
			sl.style.height = (maxHeight + 32) + 'px'
		} )
	})

}