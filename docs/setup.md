# Setup

1. Navigate to https://github.com/jlattanzi4/cs326-finalproject-rho and clone the repository "cs326-finalproject-rho".

2. Once downloaded to your local computer, you must install some things via the Terminal/Command Prompt. Run these in the directory:
    a. git init
    b. npm init y
    c. npm install level
    d. heroku login (you must login via the browser to your own account)
    e. heroku create
        - you will then want to take the given url, in format "https://<random>-<words>-#####.herokuapp.com" , and put that url in the first line of 'client.js' in the html folder.
    f. git add .
    g. git commit -am "heroku mod"
    h. git push heroku master

3. You can then access the website by going to https://random-words-#####.herokuapp.com/index.html