let p = {
	badges : document.getElementById('badges'),
	badgeInfo : document.getElementById('badgeInfo')
}

badges = {
	beatv : {
		name : 'Bea TV',
		description : 'Check out Bea TV online to earn this badge!',
		paper : 'images/badges/paper/beatv-paper-merit-badge.png',
		hrPaper : `images/badges/paper/HighRes/beatv-paper-merit-badge.png`,
		fabric : 'images/badges/fabric/beatv-fabric-merit-badge.png',
		hrFabric : `images/badges/fabric/HighRes/beatv-fabric-merit-badge.png`,
		certificate : 'https://drive.google.com/file/d/1rxwa0SK8VZFUHzYa0xih5fwS05SYuERh/view?usp=sharing',
		template : `https://drive.google.com/file/d/1pIQyKjAaRTpWx8Y-9MNBIwcwIQh4sGHm/view?usp=sharing`,
		tasks : {
			task1 : {
				id : 'youTube',
				title : `Subscribe to BeaTV on YouTube`,
				mainPhoto : `images/tasks/beatv/youtube.jpg`,
				instructions : `<p>Check out BeaTV on YouTube.<br>This is where you will find all of the Bea TV Summer Camp videos. If you enjoy Bea's Summer Camp content, then take a look around! Bea has over 100 videos for you to enjoy!</p>
					<a href="https://www.youtube.com/channel/UCpEnS-1sCtqrVwhVhPYWkBg" target="_blank"><button class="beatv-task-buttons">Bea TV on YouTube</button></a>
					<br><br>
					<div class="youTube-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/cTqqiIGwum0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>`
				},
			task2 : {
				id : 'facebook',
				title : `Follow @welcometobeatv on Facebook`,
				mainPhoto : `images/tasks/beatv/facebook.jpeg`,
				instructions : `Follow BeaTV on Facebook to keep up to date on all of Bea's videos.<br><br><a href="https://www.facebook.com/welcometobeatv" target="_blank"><button class="beatv-task-buttons">Bea TV on Facebook</button></a>
					<br><br>`
			},
			task3 : {
				id : 'instagram',
				title : `Follow @welcometobeatv on Instagram`,
				mainPhoto : `images/tasks/beatv/instagram.jpeg`,
				instructions : `Follow BeaTV on Instagram to see some of Bea's art and craft projects!<br><br><a href="https://www.instagram.com/welcometobeatv/" target="_blank"><button class="beatv-task-buttons">Bea TV on Instagram</button></a>
					<br><br>`
				},
			task4 : {
				id : 'twitter',
				title : `Follow @welcometobeatv on Twitter`,
				mainPhoto : `images/tasks/beatv/twitter.jpeg`,
				instructions : `Follow BeaTV on Twitter to keep up to date with Bea's latest videos<br><br><a href="https://twitter.com/welcometobeatv" target="_blank"><button class="beatv-task-buttons">Bea TV on Twitter</button></a>
					<br><br>`
			},
			task5 : {
				id : 'website',
				title : `Visit Bea-TV.com`,
				mainPhoto : `images/tasks/beatv/beatv-website.jpeg`,
				instructions : `Visit Bea-TV.com to see what Bea has been up to!<br><br><a href="https://bea-tv.com/" target="_blank"><button class="beatv-task-buttons">Visit Bea-TV.com</button></a>
					<br><br>`
			},
		}
	},
	mexico : {
		name : 'Mexico',
		description : 'Learn about Mexico and make some fun, colorful Mexican crafts',
		paper : 'images/badges/paper/mexico-paper-merit-badge.png',
		hrPaper : `images/badges/paper/HighRes/mexico-paper-merit-badge.png`,
		fabric : 'images/badges/fabric/mexico-fabric-merit-badge.png',
		hrFabric : `images/badges/fabric/HighRes/mexico-fabric-merit-badge.png`,
		certificate : 'https://drive.google.com/file/d/1WvoNvJvpFkDRN6jeNBRYLsZNWfPG06Lg/view?usp=sharing',
		template : `https://drive.google.com/file/d/1ziipAaMa6iMOfL1Oo6D70VmtcUlYP12d/view?usp=sharing`,
		tasks : {
			task1 : {
				id : 'ojoDeDios',
				title : `Ojo De Dios - God's Eye`,
				mainPhoto : `images/tasks/mexico/ojoDeDios.jpg`,
				instructions : `Watch this video and make an Ojo de Dios or God's Eye with Bea.<br><br>
					<h3>You Will Need:</h3>
					Scissors<br>Popsicle Sticks<br>Yarn<br>Glue<br><br>
					Watch the video below to find out how to make these Ojo De Dios.<br>
					<div class="youTube-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/8KRO6Yz_LjQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div><br>
					`
				},
			task2 : {
				id : 'cactusRockArt',
				title : `Cactus Painted Stone Art`,
				mainPhoto : ``,
				instructions : `Watch this video and make an Ojo de Dios`
			},
			task3 : {
				id : 'donkeyPinata',
				title : `Mini Donkey Pinatas`,
				mainPhoto : ``,
				instructions : `Watch this video and make an Ojo de Dios`
				},
			task4 : {
				id : 'sugarSkullDolls',
				title : `Sugar Skull Dolls`,
				mainPhoto : ``,
				instructions : `Watch this video and make an Ojo de Dios`
			},
			task5 : {
				id : 'pinchPots',
				title : `Mexican Pinch Pots`,
				mainPhoto : ``,
				instructions : `Watch this video and make an Ojo de Dios`
			},
		},
	},
	storyteller : {
		name : 'Storyteller',
		description : 'If you love making stories, then this is a badge you will really enjoy earning!',
		paper : 'images/badges/paper/storyteller-paper-merit-badge.png',
		hrPaper : `images/badges/paper/HighRes/storyteller-paper-merit-badge.png`,
		fabric : 'images/badges/fabric/storyteller-fabric-merit-badge.png',
		hrFabric : `images/badges/fabric/HighRes/storyteller-fabric-merit-badge.png`,
		certificate : 'https://drive.google.com/file/d/1rldHq1dr7Cp3iFxiOOxWSjiPzz0YeQyo/view?usp=sharing',
		template : `https://drive.google.com/file/d/1MXMAzWXp14jQBm4aUGhwdHbeGUDvZmZ9/view?usp=sharing`,
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
        	<h3>${task.title}</h3>
        	<img class="taskImage" src="${task.mainPhoto}">
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
	if(e.target.classList.contains('taskImage')){
		e.target.parentElement.nextSibling.nextSibling.classList.toggle('hide')
	}

	if(e.target.id == 'allDone'){
		let id = e.target.classList[0]

		document.getElementById('complete').innerHTML = `
		<div id="redeem">
		<h3>Congratulations!!</h3>
		<p>Choose how you want to receive your merit badge from the options below</p>
		<a href="${badges[id].certificate}" target="_blank"><button id="certificate" class="redeem ${id}">${badges[id].name} Merit Badge Certificate</button></a>
		<a href="${badges[id].hrFabric}" target="_blank"><button id="fabric" class="redeem ${id}">${badges[id].name} Fabric-Style Merit Badge</button></a>
		<a href="${badges[id].hrPaper}" target="_blank"><button id="paper" class="redeem ${id}">${badges[id].name} Paper-Style Merit Badge</button></a><br><br>
		<p>If you would like to make your own fabric merit badge, download the template below and follow <a href="https://blog.etsy.com/en/how-tuesday-make-a-merit-badge/" target="_blank">these instructions</a></p><br>
		<a href="${badges[id].template}" target="_blank"><button id="template" class="redeem ${id}">Get the ${badges[id].name} Merit Badge Template</button></a>
		</div>`
	}

})


