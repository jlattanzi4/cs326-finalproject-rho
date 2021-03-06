const url = "https://desolate-forest-61979.herokuapp.com/counter";

//const url = "http://localhost:8080/counter"; // NOTE NEW URL


function userCreate() {
    (async () => {
	let username = document.getElementById("username").value;
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	
	const data = {'username' : username, 'firstName': firstName, 'lastName': lastName, 'email': email, "password": password};
	const newURL = url + "/users/" + username + "/create";
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

function postCreate(){
	(async () => {
		let postContent = document.getElementById("postContent").value;
		let youtubeUrl = document.getElementById("url").value;
		let songTitle = document.getElementById("songTitle").value;
		let name = document.getElementById("name").value;
		var d = new Date();
		let timeOfPost = d.getHours() + ":" + d.getMinutes();
		let comment = null;

		const data = {"postContent": postContent, "youtubeUrl": youtubeUrl, "songTitle": songTitle, "name": name, "Time": timeOfPost, "Comment": comment};
		const newURL = url + "/posts/" + name + "/create";
		console.log("postCreate: fetching " + newURL);
		const resp = await postData(newURL, data);
		const j = await resp.text();

		if(j['result'] !== 'error'){
			
			var div = document.createElement('div');
			div.setAttribute('class', 'card gedf-card');
			div.innerHTML = `
				<div class="card-header">
					<div class="d-flex justify-content-between align-items-center">
						<div class="d-flex justify-content-between align-items-center">
							<div class="mr-2">
								<img class="rounded-circle" width="45" src="images/profilephoto.png" alt="">
							</div>
							<div class="ml-2">
								<div class="h5 m-0" id="posterName">${name}</div>
								<div class="h7 text-muted">@username</div>
							</div>
						</div>
					</div>

				</div>
				<div class="card-body">
					<div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>${timeOfPost}</div>
					<a class="card-link" href="#">
						<h5 class="card-title">${songTitle}</h5>
					</a>

					<p class="card-text">
						${postContent}
						<iframe width="100%" height="315" src=${youtubeUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</p>
				</div>
				<div class="card-footer">
					<a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
					<a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
				</div>
				<div class="card-footer">
					<textarea class="form-control" id="comment" name="comment" rows="3" placeholder="Give your thoughts!"></textarea>
					<button type="button" onclick="commentCreate(); eraseTextComment();" class="btn btn-primary">Comment</button>
					<p class="error_comment"></p>
				</div>
			`;

		console.log(div);
		
		document.getElementById("makePost").after(div);
		
		}
		else{
			document.getElementById("error_post").innerHTML = "Please enter all fields";
			}
		})();
}

function commentCreate(){
	(async () => {

		let name = document.getElementById("posterName").innerHTML;
		let comment = document.getElementById("comment").value;

		const data = {"name": name, "comment": comment};

		const newURL = url + "/comment/" + name + "/create";
		console.log("commentCreate: fetching " + newURL);
		const resp = await postData(newURL, data);
		const j = await resp.text();
		
		if(j['result'] !== 'error'){

		var div = document.createElement('div');
			div.setAttribute('class', 'card-footer');
			div.innerHTML = `
			<p class="card-text">
				${comment}
			</p>
		`;
		console.log(div);
		document.getElementById("comment").after(div);

		}
		else{
			document.getElementById("error_comment").innerHTML = "Please enter all fields";
		}

	})();
}

function eraseText() {
	document.getElementById("name").value = "";
	document.getElementById("songTitle").value = "";
	document.getElementById("postContent").value = "";
	document.getElementById("url").value = "";
}

function eraseTextComment(){
	document.getElementById("comment").value = ""
}

function userRead() {
    (async () => {
	let username = document.getElementById("username").value;
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	const data = {'name' : username, 'First Name': firstName, 'Last Name': lastName, 'Email': email, "Password": password};
	const newURL = url + "/users/" + username + "/read";
	console.log("counterRead: fetching " + newURL);
	const resp = await postData(newURL, data);  
	const j = await resp.json();
	
	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "201: <b>" + user + "</b>";
	} else {
	    document.getElementById("output").innerHTML = "200: " +  username + ", " + counterName + " not found.</b>";
	}
	})();
}

function counterUpdate() {
    (async () => {
	let counterName = document.getElementById("countername").value;
	let username = document.getElementById("username").value;
	let counterValue = document.getElementById("countervalue").value;
	
	
	const data = { 'name' : counterName, 'value': counterValue}; // -- (1)
	const newURL = url + "/users/" + username + "/update"; // used to be ?name=" + counterName; -- (2)
	console.log("counterUpdate: fetching " + newURL);
	const resp = await postData(newURL, data); // used to be fetch -- (3)
	const j = await resp.json();
	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "301: <b>" + username + ", " + counterName + " value = " + j['value'] + "</b>";
	} else {
	    document.getElementById("output").innerHTML = "300: " + username + ", " + counterName + " not found.";
	}	    
    })();
}

function counterDelete() {
    (async () => {
	let counterName = document.getElementById("countername").value;
	let username = document.getElementById("username").value;
	
	
	const data = { 'name' : counterName }; // -- (1)
	const newURL = url + "/users/" + username + "/delete"; // used to be ?name=" + counterName; -- (2)
	console.log("counterDelete: fetching " + newURL);
	const resp = await postData(newURL, data); // used to be fetch -- (3)
	const j = await resp.json();
	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "401: <b>" + username + ", " + counterName + " deleted.</b>";
	} else {
	    document.getElementById("output").innerHTML = "400: " + username + ", " + counterName + " not found.</b>";
	}	  
    })();
}

// NEW: helper method for posting data
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
