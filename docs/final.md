# Team Rho


### Application: Audiobooth


### Spring 2020


## Overview

AudioBooth is an application for new musical artists to get feedback about their work. There are several websites and web applications out there today that focus on the artist getting famous. That's great, but if the artist needs to get better, they're not going to get popular anytime soon. That is why we've created a web applicaiton focused on the critiquing of artist's work. Repsectful critisism is encouraged from other users, as artists are putting their work on the application to hear from the users. Users can gain a larger following, and therefore hear from more people about their thoughts on the artist's music. 


## Team Members
    
Joe Lattanzi: jlattanzi4
Patrick Goss: pgoss
Jack Eberhardt: jhmeberhardt


## User Interface

#### Register

The page where users can enter their information to create an account on AudioBooth.

![Register](images/final-register.png)

#### Home Page

The home page is where all posts are held with embedded youtube links. The reason for embedded youtube links is so videos can play right on the page as well as everything being uniform.

![Home](images/final-home.png)

#### Creating a Post

This is how users will create a post. They will include their name, the name of the song, a message, as well as an embedded youtube link (as shown)

![CreatePost](images/final-create-post.png)

#### Rendered Post

This is the result of the information entered above. The post will render above the posts that are already on the page, and will include a form for commenting.

![RenderedPost](images/final-rendered-post.png)

#### Adding a Comment

Users will be responding to artist's posts and giving constructive criticism on their work. They will be doing this in the comments section on the post.

![RenderedComment](images/final-rendered-comment.png)

#### Profile Page

Users and artists will also have profile pages where their posts are hosted, with some information about themselves and their profile as well.

![Profile](images/final-profile.png)


## APIs

### Post

#### Create

##### Overview
The create endpoint for posts allows the client to create a new post that is rendered on the home page.

##### Endpoint URI and Parameters
If you deploy the server on port 8080, the URL looks like this:
`localhost:8080/counter/posts/userId/create`

| Parameter     | Description                                      | Example                                                                                                 |
|---------------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| name          | The name of the user posting                     | Tim horton                                                                                              |
| songTitle     | The title of the song                            | Coffee & Doughnuts                                                                                      |
| content       | Description or notes the artists adds            | Hey this is my new song, check it out!                                                                  |
| publishedDate | The date when the book was published             | September 27, 1962                                                                                      |
| youtubeUrl    | The embedded youtube link to the song            | https://www.youtube.com/embed/4Ju-zEwiU1I                                                               |
| comment       | Generates and empty comment                      | null                                                                                                    |

### User

#### Create

##### Overview
The create endpoint for users allows the client to create a new account.

##### Endpoint URI and Parameters
If you deploy the server on port 8080, the URL looks like this:
`localhost:8080/counter/users/userId/create`

| Parameter     | Description                                      | Example                                                                                                 |
|---------------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| firstName     | First name of the user                           | Tim                                                                                                     |
| lastName      | Last name of the user                            | Horton                                                                                                  |
| username      | Username of the new user                         | timhorton                                                                                               |
| email         | Email of the new user                            | timhorton@canada.net                                                                                    |
| password      | Password of the new user                         | mapleSyrup123                                                                                           |


### Post

#### Update

##### Overview
The update endpoint for posts allows the client to add a new comment to the post that is rendered under that post.

##### Endpoint URI and Parameters
If you deploy the server on port 8080, the URL looks like this:
`localhost:8080/counter/comment/userId/create`

| Parameter     | Description                                      | Example                                                                                                 |
|---------------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| name          | The name of the user commenting                  | Tim horton                                                                                              |
| comment       | Text from the user about the artist's work       | The song is coming along nice. You should rethink the drums at 1:32.                                    |


//Database

| Post        |PK |
|-------------|---|
| postId      | * |
| name        |   |
| songTitle   |   |
| postContent |   |
| youtubeUrl  |   |
| comment     |   |

| User      | PK |
|-----------|----|
| userId    | *  |
| firstName |    |
| lastName  |    |
| username  |    |
| email     |    |
| password  |    |

| Comment   | PK |
|-----------|----|
| commendId | *  |
| name      |    |
| comment   |    |

## URL Routes/Mappings

*Home*
/index.html

This url maps to the home page of our web application. Here users can view posts from artists and give their critiques on each post if they feel inclined to do so.

/posts/userId/create

This url is routed when a user inputs information on the homepage and creates a post.

/comment/userId/create

This url is routed when a user inputs a comment on an existing post on the homepage.

*Register*
/register.html

This url maps to the sign up page for the web application. Users will enter information including their first name, last name, username, email, and password.

*Profile*
/profile.html

This url maps to the profile page for the user. This page hosts some information about the user as well as their recent posts.

*Log in*
/login.html

This url maps to a login page for the web application. Though authentication is not functional currently, this is where users will sign in when it is functional.


## Division of Labor

Joseph Lattanzi:
- Collaborate on HTML work
- API planning
- Linking router to client file
- Set up and deploy to Heroku
- Make and link Mongo Atlas database
- Create new functions in client file
- Create new handlers and routes for new information
- Adding new database functionality
- Testing database functionality and structure
- Implementing secrets files and configuration variables
- Creating milestone 3 document
- Making 3 releases on Github
- Assisting with video
- Creating final markdown file

Patrick Goss:
- Collaborate on HTML work
- API planning
- Help link router to client file
- Creating collections document
- Making video

Jack Eberhardt:
- Collaborate on HTML work
- Help link router to client file
- Creating setup document
- Making video

## Conclusion
Coming into this project, we would say that we were unknowingly ambitious. When first thinking of ideas, we thought making a social media like website for critiquing of music. Yet, still being new to web programming, we didn't account for how complex a social media-esque web application would be. Through the process, we did learn a lot. We attained a far better understanding of how web applications work, and now have a clear view of what happens when you click a button or submit a form. Understanding how all of the files and applications worked together was overwhelming at first, but the longer we worked with it, the more fluid it became. Yet, as you may be able to tell, we ran into some problems along the way. Our first problem was the setup of our website. Looking back, if we derived a website that looked something closer to what we had worked on in class, with four different buttons to do CRUD operations, we could've had a far more functional website. It would've involved setting the application up in a far different way, but we believe that if we knew the difficulties we would run into with this setup, we could have had a far more functional web application with a simpler setup. We were happy with how the web application looked and even some of the things it did, but because of the complexity of the setup, we were not able to implement several of the things we would have liked to in the alotted time.