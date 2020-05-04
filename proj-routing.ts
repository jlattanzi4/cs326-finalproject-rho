import {request} from "https";

let http = require('http');
let url = require('url');
let express = require('express');

export class ProjRouting {

    private theDatabase;

    private server = express();
    //private port = 8080;
    //private port = process.env.PORT;
    private router = express.Router();

    constructor(db){
    
        this.theDatabase = db;

        this.router.use((request, response, next) => {
            response.header('Content-Type','application/json');
            //response.header('Access-Control-Allow-Origin', 'https://desolate-forest-61979.herokuapp.com/create');
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Headers', '*');
            //response.header('Access-Control-Allow-Credentials');
            next();
        });

        this.server.use('/', express.static('./html'));
        this.server.use(express.json());
        this.router.post('/users/:userId/create', this.createHandler.bind(this));
        this.router.post('/posts/:userId/create', this.createPostHandler.bind(this));
        this.router.post('/comments/:userId/create', this.createCommentHandler.bind(this));
        this.router.post('/users/:userId/read', [this.errorHandler.bind(this),this.readHandler.bind(this)]);
        this.router.post('/users/:userId/update', [this.errorHandler.bind(this),this.updateHandler.bind(this)]);
        this.router.post('/users/:userId/delete', [this.errorHandler.bind(this),this.deleteHandler.bind(this)]);
    
        this.router.post('*', async (request, response) => {
            response.send(JSON.stringify({'result' : "command-not-found"}));
        });

        this.server.use('/counter', this.router);

    }

    private async errorHandler(request, response, next) : Promise<void> {
        let value : boolean = await this.theDatabase.isFound(request.params['userId']+"-"+request.query.name);
        if (!value) {
            response.write(JSON.stringify({'result' : 'error'}));
            response.end();
        } else {
            next();
        }
    }
        
    private async createHandler(request, response) : Promise<void> {
    console.log(request.params['userId']);
    await this.createUser(request.params['userId'], request.body.firstName, request.body.lastName, request.body.userName, request.body.email, request.body.password, response);
    }

    private async createPostHandler(request, response): Promise<void> {
        console.log(request.params['userId']);
        console.log(request.body.songTitle)
        await this.createPost(request.params['userId'], request.body.songTitle, request.body.postContent, request.body.youtubeUrl, response);
    }

    private async createCommentHandler(request, response): Promise<void> {
        console.log(request.params['userId']);
        await this.createComment(request.params['userId'], request.body.comment, response);
    }

    private async readHandler(request, response): Promise<void> {
    await this.readUser(request.params['userId']+"-"+request.body.name, response);
    }

    private async updateHandler(request, response) : Promise<void> {
    await this.updateUser(request.params['userId']+"-"+request.body.name, request.body.value, response);
    }

    private async deleteHandler(request, response) : Promise<void> {
    await this.deleteUser(request.params['userId']+"-"+request.body.name, response);
    }

    public listen(port) : void  {
    this.server.listen(port);
    }

    public async createUser(name: string, firstName: string, lastName: string, username: string, email: string, password: string, response) : Promise<void> {
    console.log("creating user named '" + name + "'");
    var value = [{'firstName': firstName, 'lastName': lastName, "username": username, "email": email, "password": password}];
    await this.theDatabase.put(name, value[0]);
    response.write(JSON.stringify({'result' : 'created',
                        'name' : name,
                        'value' : "User Created" }));
    response.end();
    }

    public async createPost(name: string, songTitle: string, postContent: string, youtubeUrl: string, response) : Promise<void> {
        console.log("creating user named '" + name + "'");
        var value = [{'songTitle': songTitle, 'postContent': postContent, 'youtubeUrl': youtubeUrl}];
        await this.theDatabase.put(name, value[0]);
        response.write(JSON.stringify({'result' : 'created',
                            'value' : value}));
        response.end();
        }


    public async createComment(name: string, comment: string, response){
        console.log("creating comment by '" + name + "'");
        var value = {'comment': comment};
        await this.theDatabase.put(name, value);
        response.write(JSON.stringify({'result': 'created',
                                        'value': value}));
        response.end();
    }

    public async errorUser(name: string, response) : Promise<void> {
    response.write(JSON.stringify({'result': 'error'}));
    response.end();
    }

    public async readUser(name: string, response) : Promise<void> {
    let value = await this.theDatabase.get(name);
    response.write(JSON.stringify({'result' : 'read',
                        'name' : name,
                        'value' : value }));
    response.end();
    }

    public async updateUser(name: string, value: number, response) : Promise<void> {
    await this.theDatabase.put(name, value);
    response.write(JSON.stringify({'result' : 'updated',
                        'name' : name,
                        'value' : value }));
    response.end();
    }
    
    public async deleteUser(name : string, response) : Promise<void> {
    await this.theDatabase.del(name);
    response.write(JSON.stringify({'result' : 'deleted',
                        'value'  : name }));
    response.end();
    }
}