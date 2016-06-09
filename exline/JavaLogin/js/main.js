var objPeople = [
	{
		username: "sam",
		password: "codify"
	},
	{
		username: "matt",
		password: "academy"
	},
	{
		username: "chris",
		password: "forever"
	},
	{
		username: "alex",
		password: "bless",
	}
]


function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	
	for(i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			document.write("Welcome " + username + ", please enjoy!")
			return
		}
		}
	}
//error is username and password do not match
console.log("incorrect username and/or password")
