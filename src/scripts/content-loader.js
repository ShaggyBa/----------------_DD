//Заполнение контентной части
function getRandomInt(min, max) {
	const randomInt = Math.floor(Math.random() * max)
	return randomInt > min ? randomInt : min
}


function createCard(product__name = "", product__image = "https://placehold.co/320x240") {
	return `
	<div class="category__item">
	<div class="item__image">
		<img src=${product__image} />
	</div>
	<div class="item__title">
		<h3>${product__name}</h3>
	</div>
	<div class="item__date">
		Добавлено: ${formatDate(Date.now())}
	</div>
	<button class="item__buy">
		Купить
	</button>
	</div>
	`
}

const categories = document.querySelectorAll('.category__list')

//Статическое заполнение контентной части
for (const category of categories) {
	let contentOfCategory = ""
	for (let i = 0; i < getRandomInt(10, 20); i++) {
		contentOfCategory += createCard("Название " + (i + 1))
	}
	category.insertAdjacentHTML('beforeend', contentOfCategory)
}

//Форматирование даты в строку
function formatDate(dateString) {
	const months = [
		'Января', 'Февраля', 'Марта', 'Апреля',
		'Мая', 'Июня', 'Июля', 'Августа',
		'Сентября', 'Октября', 'Ноября', 'Декабря'
	]

	const daysOfWeek = [
		'Воскресенье', 'Понедельник', 'Вторник', 'Среда',
		'Четверг', 'Пятница', 'Суббота'
	]

	// Создаем объект Date из строки с датой
	const date = new Date(dateString)

	// Получаем номер недели в году
	const weekNumber = Math.ceil((date.getDate() + 6 - date.getDay()) / 7)

	// Форматируем дату в строку
	const formattedDate = `${daysOfWeek[date.getDay()]}, ${weekNumber} неделя ${months[date.getMonth()]} ${date.getFullYear()} года`

	return formattedDate
}

