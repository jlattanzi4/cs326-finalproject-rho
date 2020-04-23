let http = require('http');
let url = require('url');
let express = require('express');

export class ProjRouting{

    private server = express();
    private router = express.Router();

    constructor(){


    this.router.use((request, response, next) => {
        response.header('Content-Type','application/json');
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', '*');
        next();
    });

    this.server.use('/', express.static('./html'));
	this.server.use(express.json());
	// Set a single handler for a route.
	this.router.post('/users/create', this.createHandler.bind(this));
	// Set multiple handlers for a route, in sequence.
	this.router.post('/users/read',   this.readHandler.bind(this));
	this.router.post('/users/update', this.updateHandler.bind(this));
	this.router.post('/users/delete', this.deleteHandler.bind(this));
	// Set a fall-through handler if nothing matches.
	this.router.post('*', async (request, response) => {
	    response.send(JSON.stringify({ "result" : "command-not-found" }));
	});
	// Start up the user endpoint at '/user'.
	this.server.use('/user', this.router);
    }
        
        private async createHandler(request, response) : Promise<void> {
        await this.createUser(request.params['userId']+"-"+request.body.name, response);
        }
    
        private async readHandler(request, response): Promise<void> {
        console.log(request.params['userId']);
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
    
        public async createUser(name: string, response) : Promise<void> {
        console.log("creating user named '" + name + "'");
        response.write(JSON.stringify({'result' : 'created',
                           'name' : name,
                           'value' : 0 }));
        response.end();
        }
    
        public async errorUser(name: string, response) : Promise<void> {
        response.write(JSON.stringify({'result': 'error'}));
        response.end();
        }
    
        public async readUser(name: string, response) : Promise<void> {
        response.write(JSON.stringify({'result' : 'read',
                           'name' : 'Joe',
                           'value' : 'lattanzi.joseph@gmail.com' }));
        response.end();
        }
    
        public async updateUser(name: string, value: number, response) : Promise<void> {
        response.write(JSON.stringify({'result' : 'updated',
                           'name' : name,
                           'value' : value }));
        response.end();
        }
        
        public async deleteUser(name : string, response) : Promise<void> {
        response.write(JSON.stringify({'result' : 'deleted',
                           'value'  : name }));
        response.end();
        }
    }