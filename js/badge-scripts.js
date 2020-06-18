let p = {
	badges : document.getElementById('badges'),
	badgeInfo : document.getElementById('badgeInfo')
}

badges = {
	beatv : {
		name : 'Bea TV',
		description : 'Freebie badge for joining the Bea TV Art Scouts!',
		paper : 'images/badges/beatv-paper-merit-badge.png',
		fabric : 'images/badges/beatv-fabric-merit-badge.jpeg',
		certificate : '',
		tasks : {
			task1 : {
				id : 'youTube',
				title : `Subscribe to BeaTV on YouTube`,
				description : `Subscrible to BeaTV on YouTube`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Subscrible to BeaTV on YouTube`
				},
			task2 : {
				id : 'facebook',
				title : `Follow BeaTV on Facebook`,
				description : `Follow BeaTV on Facebook`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Subscrible to BeaTV on YouTube`
			},
			task3 : {
				id : 'intagram',
				title : `Follow BeaTV on Instagram`,
				description : `Follow BeaTV on Instagram`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Follow BeaTV on Instagram`
				},
			task4 : {
				id : 'twitter',
				title : `Follow BeaTV on Twitter`,
				description : `Follow BeaTV on Twitter`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Follow BeaTV on Twitter`
			},
			task5 : {
				id : 'camp',
				title : `Join SummerCamp`,
				description : `Join SummerCamp`,
				link : `https://youtu.be/QHyp5RdSP9U`,
				instructions : `Join SummerCamp`
			},
		}
	},
	mexico : {
		name : 'Mexico',
		description : 'Learn about Mexico and make some fun, colorful Mexican crafts',
		paper : 'images/badges/mexico-paper-merit-badge.png',
		fabric : 'images/badges/mexico-fabric-merit-badge.jpeg',
		certificate : '',
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
		paper : 'images/badges/storyteller-paper-merit-badge.png',
		fabric : '',
		certificate : '',
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

let youTube = `<iframe width="560" height="315" src="https://www.youtube.com/embed/QHyp5RdSP9U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

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
        	<div class="hide">${task.instructions}</div>`

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
		<button id="cert">${badges[id].name} Merit Badge Certificate</button>
		<button id="fabric">${badges[id].name} Fabric-Style Merit Badge</button>
		<button id="paper">${badges[id].name} Paper-Style Merit Badge</button><br><br>
		<p>If you would like to make your own fabric merit badge, download the template below and follow <a href="https://blog.etsy.com/en/how-tuesday-make-a-merit-badge/" target="_blank">these instructions</a></p><br>
		<button id="template">Get the ${badges[id].name} Merit Badge Template</button>
		</div>`
	}
})

