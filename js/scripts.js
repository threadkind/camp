let page = {
	hamburger : document.getElementById('hamburger'),
	hbm : document.getElementById('hbm'),
	hbx : document.getElementById('hbx'),
	nav : document.querySelector('nav'),
	mainNav : document.getElementById('mainNav'),
	welcome : document.getElementById('welcome'),
	badges : document.getElementById('badges')
}

let menu = {
	links : {
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
	},
	social : {
		1 : {
			name : 'Facebook',
			image : `images/social/facebook.png`,
			link : 'https://www.facebook.com/welcometobeatv'
		},
		2 : {
			name : 'Instagram',
			image : `images/social/instagram.png`,
			link : 'https://www.instagram.com/welcometobeatv/'
		},
		3 : {
			name : 'Twitter',
			image : `images/social/twitter.png`,
			link : 'https://twitter.com/welcometobeatv'
		},
	}
}

// ADD ITEMS TO MENU
let nav = ''

Object.keys(menu.links).forEach((key) => {
	nav += `<li><a href="${menu.links[key].link}">${menu.links[key].name}</a></li>`
})

nav += `<li id="socialLi">`

Object.keys(menu.social).forEach((key) => {
	nav += `<a href="${menu.social[key].link}" target="_blank"><div class="socialMenu"><img src="${menu.social[key].image}" alt="${menu.social[key].name} logo"></div></a>`

})
nav += `</li>`

page.mainNav.innerHTML = nav;

// TOGGLE HAMBURGER BUTTOM + MENU
page.hamburger.addEventListener('click', (e) => {

	page.nav.classList.toggle('menuHide')

	if(page.hbx.classList.contains('hide')){
		page.hbx.classList.remove('hide')
		page.hbm.classList.add('hide')
	}
	else {
		page.hbm.classList.remove('hide')
		page.hbx.classList.add('hide')
	}

})
