/*document.addEventListener('DOMContentLoaded', function(event){
	// const modal = document.querySelector('.modal');
	// const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	// const closeBtn = document.querySelector('.modal__close');
	// const switchModal = () => {
	// 		modal.classList.toggle('modal--visible');
	//   }
	// modalBtn.forEach(element => {
 //   element.addEventListener('click', switchModal);
	// });

 //  closeBtn.addEventListener('click', switchModal);

 //  document.addEventListener('keydown', function(event){
 //  	if (event.code == 'Escape') {
 //  		switchModal();
 //  	}
 //  });

 // вверх к началу JS
	// const backTopBtn = document.querySelector('.button__back-top');
	// const up =() => {  
	//  let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
	// if(top > 0) {  
	//   window.scrollBy(0,((top+100)/-10));  
	//   t = setTimeout('up()',20);  
	// } else clearTimeout(t);  
	// return false;  
	// } 
	// backTopBtn.addEventListener('click', up);
  


 });*/

$(document).ready(function () {
	var modal = $('.modal'),
			modalBtn = $('[data-toggle=modal]'),
			closeBtn = $('.modal__close');

	modalBtn.on('click', function() {
	modal.toggleClass('modal--visible');		
	});
	closeBtn.on('click', function() {
  modal.toggleClass('modal--visible');
	});
    // Вверх к началу jQ
	var backTopBtn = $('.button__back-top'),
		  sitePage = $('body,html'); 
    
	 backTopBtn.on('click', function() {  
	 sitePage.animate({scrollTop:0},500);    
	  });

	  var mySwiper = new Swiper ('.swiper-container', {
    	loop: true,
    	pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
  },

  navigation: {
  	nextEl: '.swiper-button-next',
  	prevEl: '.swiper-button-prev',
  },
  
   })


var next = $('.swiper-button-next');
var prev = $('.swiper-button-prev');
var bullets = $('.swiper-pagination');

next.css('left', prev.width() + 10 + bullets.width() + 10);
bullets.css('left', prev.width() + 10);

new WOW().init();

// Валидация формы
$('.modal__form').validate({
	errorClass: "invalid",
	rules: {
 	// simple rule, converted to {required:true}
 	userName: {
 		required: true,
 	  minlength: 2,
 	  maxlength: 15
 	}, 
 	userPhone: "required",
 	// compound rule
 	userEmail: {
   	required: true,
   	email: true
 	}	
 },
 messages: {
    userName: {
    	required: "Заполните поле",
    	minlength: "Имя не короче  двух букв",
  		maxlength: "Не более 15 символов"
    }, 
    userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
    }
   }
  });

  //Маска для телефона

  $('[type=tel]').mask('+7(000)000-00-00', {placeholder:"+7(__)__-__-"});

 
 

   
});



