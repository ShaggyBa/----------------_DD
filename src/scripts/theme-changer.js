document.addEventListener("DOMContentLoaded", function () {
	const lightTheme = document.querySelector('.light-theme-btn')
	const darkTheme = document.querySelector('.dark-theme-btn')

	const link = document.getElementById('theme')

	if (localStorage.getItem('theme')) {
		link.setAttribute('href', `../src/styles/${localStorage.getItem('theme')}-theme.css`)

		if (localStorage.getItem('theme') === 'light')
			lightTheme.style.boxShadow = "1px 1px 17px 5px rgba(255, 239, 3, 1)"
		else
			darkTheme.style.boxShadow = "1px 1px 17px 5px rgba(106, 11, 110, 1)"
	}
	else
		lightTheme.style.boxShadow = "1px 1px 17px 5px rgba(255, 239, 3, 1)"



	darkTheme.addEventListener("click", function () {
		if (localStorage.getItem('theme') !== 'dark') {
			localStorage.setItem('theme', 'dark')

			link.setAttribute('href', `../src/styles/${localStorage.getItem('theme')}-theme.css`)

			lightTheme.style.boxShadow = ""
			darkTheme.style.boxShadow = "1px 1px 17px 5px rgba(106, 11, 110, 1)"

		}
	})

	lightTheme.addEventListener("click", function () {
		if (localStorage.getItem('theme') !== 'light') {
			localStorage.setItem('theme', 'light')

			link.setAttribute('href', `../src/styles/${localStorage.getItem('theme')}-theme.css`)

			darkTheme.style.boxShadow = ""
			lightTheme.style.boxShadow = "1px 1px 17px 5px rgba(255, 239, 3, 1)"

		}
	})

})