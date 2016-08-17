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

//function to check local storage for user name
function checkLocalStorage () {
	if (localStorage.getItem('userName') == null) {
		storeUserName()
	} else {
		var userName = JSON.parse(localStorage.getItem('userName'))
	}
	return userName
}

function welcomeMessage (userName) {
	if(localStorage.getItem('userName') !== null) {
		var welcomeMessagePosition = document.getElementById('welcomeMessage')
		var welcomeMessage = document.createTextNode('Wecome back ' + userName + '!')
	}
}
