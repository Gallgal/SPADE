var content1 = document.querySelector('.content1')
var content2 = document.querySelector('.content2')
var content3 = document.querySelector('.content3')
var path1 = document.querySelector('.path1')
var path1Length = path1.getTotalLength()
var path2 = document.querySelector('.path2')
var path2Length = 8853.2
var path3 = document.querySelector('.path3')
var path3Length = 2609.4
path1.style.strokeDasharray = path1Length 
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight*0.8, content1, path1Length)

path2.style.strokeDasharray = path2Length 
path2.style.strokeDashoffset = calcDashoffset(window.innerHeight*0.8, content2, path2Length)

path3.style.strokeDasharray = path3Length 
path3.style.strokeDashoffset = calcDashoffset(window.innerHeight*0.8, content3, path3Length)

function calcDashoffset(scrollY, element, length){
	var ratio = (scrollY - element.offsetTop) / element.offsetHeight
	var value = length - (length * ratio)
	return value < 0 ? 0 : value > length ? length : value
}

function scrollHandler(){
	var scrollY = window.scrollY + (window.innerHeight * 0.2)
	path1.style.strokeDashoffset = calcDashoffset(scrollY,content1,path1Length)
	path2.style.strokeDashoffset = calcDashoffset(scrollY,content2,path2Length)
	path3.style.strokeDashoffset = calcDashoffset(scrollY,content3,path3Length)
}
window.addEventListener('scroll', scrollHandler )




// function scroll(){
// 	const scroll = document.querySelectorAll('.scroll');
// 	const winTop = document.documentElement.scrollTop;

// 	img.forEach((i) => {
//   	const imgTop = i.offsetTop-100;

//   	 if( imgTop <= winTop )
//     	i.classList.add('on')
//   });
// }

// window.addEventListener('scroll', () => {
// 	view()
// })

const scroll = document.querySelectorAll('.scroll');
const scroll1 = document.querySelectorAll('.scroll1');
const scroll2 = document.querySelectorAll('.scroll2');
const textscroll = document.querySelectorAll('.textscroll');

let observer = new IntersectionObserver((e)=>{
	e.forEach((scroll)=>{
		if(scroll.isIntersecting){scroll.target.style.opacity = 1;
		scroll.target.style.transform = 'scale(1.0) translateY(0)'}
		;
	})
})

let observer2 = new IntersectionObserver((e)=>{
	e.forEach((textscroll)=>{
		if(textscroll.isIntersecting){textscroll.target.style.opacity = 1;
		textscroll.target.style.transform = 'translateY(0)'}
		//e.forEach((scroll1)=>{if(scroll1.isIntersecting){scroll1.target.style.transform = 'scale(1.3)';}
	})
})


scroll1.onmouseover=function(){scroll1.target.style.transform = 'scale(1.3)';}

observer2.observe(textscroll[0])
observer2.observe(textscroll[1])
observer2.observe(textscroll[2])
observer2.observe(textscroll[3])
observer2.observe(textscroll[4])
observer2.observe(textscroll[5])
observer2.observe(textscroll[6])
observer2.observe(textscroll[7])
observer2.observe(textscroll[8])




observer.observe(scroll[0])
observer.observe(scroll[1])
observer.observe(scroll[2])
observer.observe(scroll[3])
observer.observe(scroll[4])
observer.observe(scroll[5])
observer.observe(scroll[6])
observer.observe(scroll1[0])
observer.observe(scroll1[1])
observer.observe(scroll1[2])
observer.observe(scroll2[0])