//function to store user name
function storeUserInput () {
	var userLocation = document.getElementById('address').value
	sessionStorage.setItem('address', JSON.stringify(userLocation))
	var userName = document.getElementById('name').value
	if (localStorage.getItem("userName") == null) {
		localStorage.setItem("userName", JSON.stringify(userName))
	}
}

document.getElementById('formButton').addEventListener('click', storeUserInput)

function welcomeMessage () {
	if(localStorage.getItem('userName') !== null) {
		var userName = JSON.parse(localStorage.getItem('userName'))
		var welcomeMessagePosition = document.getElementById('welcomeMessage')
		var welcomeMessage = document.createTextNode('Wecome back ' + userName + '!')
		welcomeMessagePosition.appendChild(welcomeMessage)
	}
}

welcomeMessage()
