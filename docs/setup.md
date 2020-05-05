# Setup

1. Navigate to https://github.com/jlattanzi4/cs326-finalproject-rho and clone the repository "cs326-finalproject-rho".

2. Once downloaded to your local computer cd to where you cloned the repository and then you must install some things via the Terminal/Command Prompt. Run these in the directory:
    b. npm init y
    c. npm install typescript
    d. npm install mongodb
    e. npm install heroku

3. With a code-editing software, open the cloned repository folder. 
    a. open the file proj-server.ts
    b. edit the line "theServer.listen(process.env.PORT);" to be "theServer.listen(process.env.8080);"
        - this will allow you to view the web application locally
    
4. Once you have made the changes to the code, save the file.

5. Make sure your terminal/command prompt is in the downloaded directory, and run the command:
    - " ts-node --prefer-ts-exts proj-server.ts"

6. Now the web application is being hosted locally, and all you need to do is navigate to your browser and go to http://localhost:8080/ and the web application should be able to be viewed and used!