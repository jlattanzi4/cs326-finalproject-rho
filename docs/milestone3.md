 # Milestone 3

 ## Database Implementation

 ### Database Choice

 For our AudioBooth web application, we elected to use MongoDB Atlas as our database. Atlas provides a free version where you can have one cluster to hold your database and it's collections.

 ### Connection

 We connect to MongoDB with it's given application connections uri. This uri contains the username and password for the cluster, meaning this has to be hidden. In order to do so, we created a 'secrets.json' file holding the uri, and have also stored the uri in the configuration variables in Heroku, where the app is deployed. With this structure, the code provided on Github does not reveal any usernames or passwords, and is called on the backend so the database cannot be compromised. 

 ### Structure

 Our structure contains three main collections. 
 
 The first of these is 'Users'. Users are created when they sign up on the register page. They are asked to enter information about themselves, and when they are done they will submit their information and be brought to the home page.

 #### Users
 - _id : <UserId1>
 - First Name : string
 - Last Name : string
 - Username : string
 - E-mail : string
 - Password ; string

The second of these collections are 'Posts'. There is a form on the home page where users are able to enter information including their name, the title of their song, a message, and then a space of them to enter an embedded youtube link.

 #### Posts
 - _id : <PostId1>
 - Name : string
 - Song Title : string
 - Content : string
 - Link : string

 Lastly, there are 'Comments'. Comments is where we hope the majority of the activity on our web application will be occurring. There will be a commenting form on every post, and users will be able to leave their thoughts right on the user's post for their thoughts/critisisms on the artist's work.

 #### Comments
 - _id : <CommentId1>
 - Comment : string



### Division of Labor for Mileston 3
Joe Lattanzi:
- Creating the database
- Linking the database
- Implementation of client side functions
- Implementation of routing
- Rendering of new data on the html page
- Creating milestone 3 markdown file
- Testing database functionality and structure
- Implementing secrets and configuration variables
- Adding new database functions

Patrick Goss:
- Creating the collections document
- Collaborating on testing database functionality and structure

Jack Eberhardt:
- Creating the setup markdown document
- Collaborating on testing of client side functions