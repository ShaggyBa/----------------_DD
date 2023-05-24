//Прокрутка страницы

const links = document.querySelectorAll('a[href*="#"]')

for (let link of links) {
	link.addEventListener('click', (e) => {
		e.preventDefault()
		const hrefTo = link.getAttribute('href')
		const ancher = document.getElementById(hrefTo.slice(1,)).getBoundingClientRect()
		const bodyRect = document.body.getBoundingClientRect()

		window.scrollTo({
			top: ancher.top - bodyRect.top - 175,
			behavior: 'smooth'
		})
	})
}

// Кнопка-возврат 
const btn = document.querySelector('.backToBegin__btn')
btn.addEventListener('click', (e) => {
	e.preventDefault()
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})


//Бургер-меню 
const burgerBtn = document.querySelector('.header__burger-btn')
const header = document.querySelector('.header')
burgerBtn.addEventListener('click', (e) => {
	header.classList.toggle('open')
})