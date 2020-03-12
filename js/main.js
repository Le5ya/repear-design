/*document.addEventListener('DOMContentLoaded', function(event){
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const closeBtn = document.querySelector('.modal__close');
	const switchModal = () => {
			modal.classList.toggle('modal--visible');
	  }
	modalBtn.forEach(element => {
   element.addEventListener('click', switchModal);
	});

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keydown', function(event){
  	if (event.code == 'Escape') {
  		switchModal();
  	}
  });

});*/

$(document).ready(function () {
	var modal = $('.modal'),
			modalBtn = $('[data-toggle=modal]'),
			closeBtn = $('.modal__close');

	modalBtn.on('click', function() {
	modal.toggleClass('modal--visible')		
	});
	closeBtn.on('click', function() {
  modal.toggleClass('modal--visible')
	});
});

// вверх к началу JS
const backTopBtn = document.querySelector('.button__back-top');
const up =() => {  
 let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
if(top > 0) {  
  window.scrollBy(0,((top+100)/-10));  
  t = setTimeout('up()',20);  
} else clearTimeout(t);  
return false;  
} 
backTopBtn.addEventListener('click', up);

/*$(document).ready(function() {
var backTopBtn = $('.back-top'),
		sitePage = $('body'); 
    
 backTopBtn.on('click', function() {  
 sitePage.animate({scrollTop:0},500);    
  });  
   
});   
*/
