// object constructor for astronauts
function Astronaut(img, bio, fname, lname, status, age, country, expertise) {
	this.image = img
	this.biography = bio
	this.firstName = fname
	this.lastName = lname
	this.status = status
	this.age = age
	this.country = country
	this.expertise = expertise
}

var astronauts = [
	new Astronaut('img/Anatoli_Ivanishin.png', 'Born January 15, 1969 in Irkutsk is a Russian cosmonaut. His first visit to space was to the International Space Station on board the Soyuz TMA-22 spacecraft as an Expedition 29 /Expedition 30 crew member, launching in November 2011 and returning in April 2012.', 'Anatoli', 'Ivanishin', 'Active', 47, 'Russia', 'Pilot'),
	new Astronaut('img/Jeffrey_Williams.png', 'Born in Superior, Wisconsin, and raised in Winter, Wisconsin. As a child, Williams was a Star Scout in the Boy Scouts of America.  During the Jamboree on the Air in October 2009 he communicated with Boy Scouts in the National Scouting Museum inTexas from the International Space Station.  Williams graduated from Winter High School in Winter, Wisconsin, in 1976. He earned an engineering degree from the U.S. Military Academy in 1980, receiving his commission in the United States Army. Williams served with the Army at Johnson Space Center from 1987 to 1992 before training as a test pilot. In 1996, he was selected by NASA as an astronaut candidate and flew as a mission specialist and flight engineer aboard STS-101 in 2000.', 'Jeffrey', 'Williams', 'Active', 58, 'U.S.A.', 'Colonel US Army'),
	new Astronaut('img/kathleen_rubins.png', 'Born in Farmington, Connecticut and raised in Napa, California, graduating from Vintage High School. Her father, Jim, still resides in Napa. Her mother, Ann Hallisey, lives in Davis, California. Rubins is married to Michael Magnani. She received a Bachelor of Science degree in molecular biology from the University of California San Diego and a Ph.D. degree in cancer biology from Stanford University Medical School Biochemistry Department and Microbiology and Immunology Department. She was a member of the Kappa Lambda chapter of the Chi Omega Fraternity while attending UC San Diego.', 'Kathleen', 'Rubins', 'Active', 37, 'U.S.A.', 'Microbiology'),
	new Astronaut('img/oleg_skripochka.png', 'Born 24 December 1969 in Nevinnomyssk, Stavropol Krai, Russia is a cosmonaut. In 2011 he was in space serving as an Expedition 25/26 crewmember.  On April 12, 2011, Skripochka was awarded the titles of Hero of the Russian Federation and Pilot-Cosmonaut of the Russian Federation for courage and heroism in the implementation of long-duration space flight on the International Space Station.', 'Oleg', 'Skripochaka', 'Active', 46, 'Russia', 'Mechanical Engineer'),
	new Astronaut('img/onishi_takuya.png', 'Born in Nerima, Tokyo, Japan. He graduated from Seiko High School in Yokohama in 1994 and received a Bachelor of Engineering degree in Aeronautical and Space Engineering from the University of Tokyo in 1998. He joined All Nippon Airways (ANA) in 1998 and was assigned to the Passenger Service Department, Haneda airport, Tokyo, where he was a check-in agent and assisted disabled people in boarding.', 'Takuya', 'Onishi', 'Active', 40, 'Japan', 'Pilot'),
	new Astronaut('img/ovchinin_aleksei.png', "Born 28 September 1971 in Rybinsk, Yaroslavl Oblast, Russian SFSR is a Russian Air Force major and cosmonaut, selected in 2006. Ovchinin's first spaceflight has taken place on Soyuz TMA-20M which launched on March 18, 2016 21:26 UTC as part of Expedition 47/Expedition 48. Ovchinin flew as the commander of the spacecraft which docked with the ISS after the now standard 4 orbits.", 'Aleksei', 'Ovchinin', 'Active', 44, 'Russia', 'Cosmonaut')
]

// display astronaut information
function createAstronautInfo () {
	for (var i = 0; i < astronauts.length; i++) {
		var newSec = document.createElement('section')
		newSec.setAttribute('class', 'col_3')
		var astroImage = new Image()
		astroImage.src = astronauts[i].image
		astroImage.setAttribute('class', 'astronaut-name')
		newSec.appendChild(astroImage)
		var astroNamePosition = document.createElement('h1')
		var astroName = document.createTextNode(astronauts[i].firstName + ' ' + astronauts[i].lastName)
		astroNamePosition.appendChild(astroName)
		newSec.appendChild(astroNamePosition)
		var astroBioPosition = document.createElement('p')
		astroBioPosition.setAttribute('class', 'bio-paragraph')
		var astroBio = document.createTextNode(astronauts[i].biography)
		astroBioPosition.appendChild(astroBio)
		newSec.appendChild(astroBioPosition)
		// create table
		var newTable = document.createElement('table')
		newTable.setAttribute('class', 'astronaut-table')
		// create header row, cells and content
		var header = newTable.createTHead()
		var rowHead = header.insertRow(0)
		rowHead.setAttribute('class', 'text')
		var cellHead1 = rowHead.insertCell(0)
		var cellHead2 = rowHead.insertCell(1)
		var cellHead3 = rowHead.insertCell(2)
		var cellHead4 = rowHead.insertCell(3)
		var cellHead5 = rowHead.insertCell(4)
		var cellHead6 = rowHead.insertCell(5)
		var headText1 = document.createTextNode('First Name')
		var headText2 = document.createTextNode('Last Name')
		var headText3 = document.createTextNode('Status')
		var headText4 = document.createTextNode('Age')
		var headText5 = document.createTextNode('Country')
		var headText6 = document.createTextNode('Expertise')
		cellHead1.appendChild(headText1)
		cellHead2.appendChild(headText2)
		cellHead3.appendChild(headText3)
		cellHead4.appendChild(headText4)
		cellHead5.appendChild(headText5)
		cellHead6.appendChild(headText6)
		// create data row
		var row = newTable.insertRow(0)
		newTable.appendChild(row)
		var cell1 = row.insertCell(0)
		var cell2 = row.insertCell(1)
		var cell3 = row.insertCell(2)
		var cell4 = row.insertCell(3)
		var cell5 = row.insertCell(4)
		var cell6 = row.insertCell(5)
		var cellText1 = document.createTextNode(astronauts[i].firstName)
		var cellText2 = document.createTextNode(astronauts[i].lastName)
		var cellText3 = document.createTextNode(astronauts[i].status)
		var cellText4 = document.createTextNode(astronauts[i].age)
		var cellText5 = document.createTextNode(astronauts[i].country)
		var cellText6 = document.createTextNode(astronauts[i].expertise)
		cell1.appendChild(cellText1)
		cell2.appendChild(cellText2)
		cell3.appendChild(cellText3)
		cell4.appendChild(cellText4)
		cell5.appendChild(cellText5)
		cell6.appendChild(cellText6)
		newSec.appendChild(newTable)
		var wrapPosition = document.getElementById('wrap')
		wrapPosition.appendChild(newSec)
	}
}

createAstronautInfo()
