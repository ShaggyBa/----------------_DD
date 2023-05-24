//Модальное окно и отправка формы
const modal = document.querySelector('.modal')

const buyButton = document.querySelector('.modal__btn-buy')
const closeButton = document.querySelector('.modal__btn-close')

const modalForm = document.forms.modal

//Открытие модального окна 
const buttonsItemBuy = document.querySelectorAll('.item__buy')

for (const button of buttonsItemBuy) {
	button.addEventListener('click', showModal)
}

function showModal(e) {
	const item = e.target.closest('.category__item')
	const name = item.querySelector('.item__title h3').textContent
	openModal(name)

}

const product = document.querySelector('.product')

function openModal(name = "...") {

	modal.classList.add('active')
	product.value = name

}

//Закрытие модального окна при клике вне области
modal.addEventListener('click', (e) => {
	if (e.target === modal)
		modal.classList.remove('active')

})

//Обработка клика кнопки "Купить"
buyButton.addEventListener('click', (e) => {
	e.preventDefault()
	alert('Успешная покупка товара!')
	modal.classList.remove('active')

	let color = ""
	for (const el of modalForm.elements) {
		if (el.type === 'radio' && el.checked) {
			color = el.value
		}
	}

	console.log(JSON.stringify({ name: modalForm.elements[0].value, quantity: modalForm[1].value, color, commentary: modalForm.elements[5].value }))

})

closeButton.addEventListener('click', (e) => {
	e.preventDefault()
	modal.classList.remove('active')

})
