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
		link : '#'
	},
	2 : {
		name : 'Start Here!',
		link : '#'
	},
	3 : {
		name : 'Merit Badges',
		link : 'merit-badges.html'
	},
	4 : {
		name : 'Bea TV Website',
		link : '#'
	},
	5 : {
		name : 'Social',
		link : '#'
	}
}

// ADD ITEMS TO MENU


console.log(Object.keys(menu))
let nav = ''
Object.keys(menu).forEach((key) => {
	nav += `<li class="hide"><a href="${menu[key].link}">${menu[key].name}</a></li>`


})

page.mainNav.innerHTML = nav;

// TOGGLE HAMBURGER BUTTOM + MENU
page.hamburger.addEventListener('click', () => {
	document.querySelectorAll('#mainNav li').forEach((li) => {
		li.classList.toggle('hide')
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