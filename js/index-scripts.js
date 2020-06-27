let p = {
	recent : document.getElementById('recent'),
	recentBadges : document.getElementById('recentBadges'),
	recentVideos : document.getElementById('recentVideos')
}

let recentBadges = {
	1 : {
		id : `beatv`,
		name : `Bea TV`,
		image : `images/badges/paper/beatv-paper-merit-badge.png`,
	},
	2 : {
		id : `mexico`,
		name : `Mexico`,
		image : `images/badges/paper/mexico-paper-merit-badge.png`,
	},
	3 : {
		id: `storyteller`,
		name : `Storyteller`,
		image : `images/badges/paper/storyteller-paper-merit-badge.png`,
	},

}

let recentVideos = {
	1 : {
		title : `Ojo de Dios - God’s Eye Craft || Bea TV Summer Camp - Mexico Merit Badge`,
		description : `In this video, Bea shows you how to make Ojo de Dios or God's Eyes. This is a simple craft that you can make with yarn and popsicle sticks.
			Get all the info on how to earn the Mexico Merit Badge and other badges at Bea's Summer Camp Website.`,
		videoID : `8KRO6Yz_LjQ`
	},
	2 : {
		title : `Easy Video Effects for Kids || LumaFusion || Bea TV`,
		description : `Today Bea and her twin sister, Hannah, show us how to create some cool video effects using LumaFusion video editing app for the iPad.`,
		videoID : `cTqqiIGwum0`
	},
	3 : {
		title : `Looking At Things Under A Microscope! || Bea TV`,
		description : `Today Bea gets a gift from her Grandpa, which is a digital microscope. She looks at a variety of things under the microscope and sees some crazy sights!`,
		videoID : `ML5hA4xz9YE`
	}


}

b = ``

Object.keys(recentBadges).forEach((key) => {
	b += `<a href="http://camp.bea-tv.com/merit-badges.html">
		<figure class="recentBadge">
			<img src="${recentBadges[key].image}" alt="${recentBadges[key].name} merit badge">
			<figcaption>${recentBadges[key].name} Merit Badge</figcaption>
		</figure>
		</a>`


})

p.recentBadges.innerHTML = b

v = ``

Object.keys(recentVideos).forEach((key) => {
	v += `<div class="youTube">
		<div class="youTube-wrapper">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/${recentVideos[key].videoID}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<p>${recentVideos[key].title}</p>
		</div>`


})

p.recentVideos.innerHTML = v
