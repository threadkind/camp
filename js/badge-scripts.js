let p = {
	badges : document.getElementById('badges'),
	badgeInfo : document.getElementById('badgeInfo')
}

badges = {
	beatv : {
		name : 'Bea TV',
		description : 'Check out Bea TV online to earn this badge!',
		paper : 'images/badges/paper/beatv-paper-merit-badge.png',
		fabric : 'images/badges/fabric/beatv-fabric-merit-badge.jpeg',
		certificate : 'https://photos.app.goo.gl/BVo8b7h2yUEtdbF97',
		template : ``,
		tasks : {
			task1 : {
				id : 'youTube',
				title : `Subscribe to BeaTV on YouTube`,
				mainPhoto : ``,
				instructions : `<p>Check out BeaTV on YouTube.<br>This is where you will find all of the Bea TV Summer Camp videos. If you enjoy Bea's Summer Camp content, then take a look around! Bea has over 100 videos for you to enjoy!</p>
					<div class="youTube-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/cTqqiIGwum0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>`
				},
			task2 : {
				id : 'facebook',
				title : `Follow BeaTV on Facebook`,
				mainPhoto : ``,
				instructions : `Follow BeaTV on Facebook to keep up to date on all of Bea's videos.`
			},
			task3 : {
				id : 'intagram',
				title : `Follow BeaTV on Instagram`,
				mainPhoto : ``,
				instructions : ``
				},
			task4 : {
				id : 'twitter',
				title : `Follow BeaTV on Twitter`,
				mainPhoto : ``,
				instructions : `Follow BeaTV on Twitter to keep up to date with Bea's latest videos`
			},
			task5 : {
				id : 'camp',
				mainPhoto : ``,
				title : `Visit Bea-TV.com`,
				instructions : `Visit Bea-TV.com to see what Bea has been up to!`
			},
		}
	},
	mexico : {
		name : 'Mexico',
		description : 'Learn about Mexico and make some fun, colorful Mexican crafts',
		paper : 'images/badges/paper/mexico-paper-merit-badge.png',
		fabric : 'images/badges/fabric/mexico-fabric-merit-badge.jpeg',
		certificate : 'https://photos.app.goo.gl/WC5QmJ43ZRRiKJjp6',
		template : ``,
		tasks : {
			task1 : {
				id : 'ojoDeDios',
				title : `God's Eye`,
				description : `Bea makes God's Eyes`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios.`
				},
			task2 : {
				id : 'cactusRockArt',
				title : `Cactus Painted Stone Art`,
				description : `Here is a description of task 1`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios`
			},
			task3 : {
				id : 'ojoDeDios',
				title : `God's Eye`,
				description : `Bea makes God's Eyes`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios`
				},
			task4 : {
				id : 'ojoDeDios',
				title : `God's Eye`,
				description : `Bea makes God's Eyes`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios`
			},
			task5 : {
				id : 'ojoDeDios',
				title : `God's Eye`,
				description : `Bea makes God's Eyes`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios`
			},
		},
	},
	storyteller : {
		name : 'Storyteller',
		description : 'If you love making stories, then this is a badge you will really enjoy earning!',
		paper : 'images/badges/paper/storyteller-paper-merit-badge.png',
		fabric : '',
		certificate : 'https://photos.app.goo.gl/WC5QmJ43ZRRiKJjp6',
		template : ``,
		tasks : {
			task1 : {
				id : 'ojoDeDios',
				title : `God's Eye`,
				description : `Bea makes God's Eyes`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios.`
				},
			task2 : {
				id : 'cactusRockArt',
				title : `Cactus Painted Stone Art`,
				description : `Here is a description of task 1`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios`
			},
			task3 : {
				id : 'ojoDeDios',
				title : `God's Eye`,
				description : `Bea makes God's Eyes`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios`
				},
			task4 : {
				id : 'ojoDeDios',
				title : `God's Eye`,
				description : `Bea makes God's Eyes`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios`
			},
			task5 : {
				id : 'ojoDeDios',
				title : `God's Eye`,
				description : `Bea makes God's Eyes`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Watch this video and make an Ojo de Dios`
			}
		}
	}
}

let keys = Object.keys(badges)

// ADD BADGES TO PAGE AS MENU
let badgeMenu = ``

keys.forEach((key) => {
	badgeMenu += `<img class="badgeImage" id="${key}" src="${badges[key].paper}">`
})
p.badges.innerHTML = badgeMenu

// EVENT LISTENER TO LISTEN FOR CLICK ON BADGE MENU
p.badges.addEventListener('click', (e) => {
	if(e.target.localName == 'img'){
		let id = e.target.id

		let bi = `
		<h3>${badges[id].name} Merit Badge</h3>
		<img src="${badges[id].paper}">
        <div id="des"><p>${badges[id].description}</p></div>
        <p>Complete all 5 tasks to earn your ${badges[id].name} Merit Badge.<br><br>Click on the tasks below to get information and instructions on how to complete each one.</p>`

        Object.keys(badges[id].tasks).forEach((key) => {
        	let task = badges[id].tasks[key]

        	bi += `<div id="${key}"class="badgeTask">
        	${task.title}
        	</div>
        	<div class="hide taskInfo">${task.instructions}</div>`

        })

        let checklist = `<div id="complete"><p>Have you completed all 5 tasks for the ${badges[id].name} Merit Badge?</p>`
        Object.keys(badges[id].tasks).forEach((key) => {
        	console.log(badges[id].tasks[key].title)
			checklist += `<input type="checkbox" id="${badges[id].tasks[key].title}" name="${badges[id].tasks[key].title}">
           <label for="${badges[id].tasks[key].title}" class="strikethrough">${badges[id].tasks[key].title}</label><br>`
        })

        bi += `
			${checklist}<br>
			<button id="allDone" class="${id}">Yes, I have completed all 5 tasks!</button>
		</div>`

		p.badgeInfo.innerHTML = bi
	}

})

// EVENT LISTENER TO LISTEN FOR CLICK ON BADGE INFO TO EXPAND INSTRUCTIONS

p.badgeInfo.addEventListener('click', (e) => {
	if(e.target.classList.contains('badgeTask')){
		e.target.nextSibling.nextSibling.classList.toggle('hide')
	}

	if(e.target.id == 'allDone'){
		let id = e.target.classList[0]

		document.getElementById('complete').innerHTML = `
		<div id="redeem">
		<h3>Congratulations!!</h3>
		<p>Choose how you want to receive your merit badge from the options below</p>
		<a href="${badges[id].certificate}" target="_blank"><button id="certificate" class="redeem ${id}">${badges[id].name} Merit Badge Certificate</button></a>
		<a href="${badges[id].fabric}" target="_blank"><button id="fabric" class="redeem ${id}">${badges[id].name} Fabric-Style Merit Badge</button></a>
		<a href="${badges[id].paper}" target="_blank"><button id="paper" class="redeem ${id}">${badges[id].name} Paper-Style Merit Badge</button></a><br><br>
		<p>If you would like to make your own fabric merit badge, download the template below and follow <a href="https://blog.etsy.com/en/how-tuesday-make-a-merit-badge/" target="_blank">these instructions</a></p><br>
		<a href="${badges[id].template}" target="_blank"><button id="template" class="redeem ${id}">Get the ${badges[id].name} Merit Badge Template</button></a>
		</div>`
	}

})


