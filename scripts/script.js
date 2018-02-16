//Scrolls the navigation bar into view when the user scrolls down far enough
function scrollNav() {
	const nav = document.querySelector('nav');
	let scroll = window.pageYOffset;
	if(scroll > 420) {
		nav.style.top ='0';
	} else {
		nav.style.top = '-80px'
	}
}

window.addEventListener('scroll', scrollNav);

//toggles navbar display on arrow click
const navCollapse = document.querySelector('#nav-collapse');

function navToggle(e) {
	this.classList.toggle('fa-arrow-down');
	this.classList.toggle('fa-arrow-up');
	const navbar = document.querySelector('.navigation');
	navbar.classList.toggle('showNav');
}

navCollapse.addEventListener('click', navToggle);

//Navigational scroll animation using jQuery and taken from css-tricks.com
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(e) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
		}
	});