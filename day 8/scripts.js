// let k = prompt('введите имя');

// function hi(k) {
	// let result = "Привет, " + k;
	// document.write(result);
// };


// hi(k);

// $(document).ready(function(){
// 	$('div:first-child')
// 	.mouseover(function(){
// 	 $(this).addClass('hover').html('New text');
// 	 $('div:last-child').css('color', 'pink');
// 	})
// 	.mouseout (function(){
// 	 $(this).removeClass('hover').html('Текст');
// 	});
// 	$('.parent-menu').click(function(){
// 		$('.submenu').slideToggle('slow');
// 		// clearInterval(timer);
// 	});
// });

window.addEventListener('resize', onResize);

function onResize() {
	console.log('Был изменен размер браузера');
}
// let timer = setInterval(addText, 3000); //в миллисекундах

// function addText() {
// 	$('.my-class2').append('прошло 3 секунды ');
// }

