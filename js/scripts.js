let page = {
	hamburger : document.getElementById('hamburger'),
	hbm : document.getElementById('hbm'),
	hbx : document.getElementById('hbx'),
	mainNav : document.getElementById('mainNav'),
	welcome : document.getElementById('welcome'),
	badges : document.getElementById('badges')
}

let menu = {
	1 : {
		name : 'Home',
		link : 'index.html'
	},
	2 : {
		name : 'Merit Badges',
		link : 'merit-badges.html'
	},
	3 : {
		name : 'Bea TV Website',
		link : 'https://bea-tv.com/'
	},
	4 : {
		name : 'Social',
		link : '#'
	}
}

// ADD ITEMS TO MENU
let nav = ''
Object.keys(menu).forEach((key) => {
	nav += `<li class="menuHide"><a href="${menu[key].link}">${menu[key].name}</a></li>`
})

page.mainNav.innerHTML = nav;

// TOGGLE HAMBURGER BUTTOM + MENU
page.hamburger.addEventListener('click', () => {
	document.querySelectorAll('#mainNav li').forEach((li) => {
		li.classList.toggle('menuHide')
	})

	if(page.hbx.classList.contains('hide')){
		page.hbx.classList.remove('hide')
		page.hbm.classList.add('hide')
	}
	else {
		page.hbm.classList.remove('hide')
		page.hbx.classList.add('hide')
	}

})
