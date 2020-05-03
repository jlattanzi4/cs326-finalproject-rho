url = "https://desolate-forest-61979.herokuapp.com/register.html/counter"

function userCreate() {
    (async () => {
	let userName = document.getElementById("username").value;
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	
	const data = {'username' : userName, 'firstName': firstName, 'lastName': lastName, 'email': email, "password": password};
	const newURL = url + "register.html/users/" + userName + "/create";
	console.log("userCreate: fetching " + newURL);
	const resp = await postData(newURL, data); 
	const j = await resp.json();

	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "101: <b>" + firstName + ", your account has been created.</b>";
	} else {
	    document.getElementById("output").innerHTML = " Please enter all of the information required to sign up.</b>";
	}
	})();
}

async function postData(url, data) {
    const resp = await fetch(url,
                             {
                                 method: 'POST',
                                 mode: 'cors',
                                 cache: 'no-cache',
                                 credentials: 'same-origin',
                                 headers: {
									 'Content-Type': 'application/json'
                                 },
                                 redirect: 'follow',
                                 body: JSON.stringify(data)
                             });
    return resp;
}