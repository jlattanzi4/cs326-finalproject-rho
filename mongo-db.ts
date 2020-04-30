export class Database {

    private MongoClient = require('mongodb').MongoClient;
    private secrets = require('./secrets.json');
    private uri = "mongodb+srv://rho:<cs326>@cluster0-sfoqe.mongodb.net/test?retryWrites=true&w=majority"
    //private uri = this.secrets.uri;
    private client;
    private collectionName : string; // do i need something here
    private dbName : string = "ab";


    constructor(collectionName) {
	this.collectionName = collectionName;
	this.client = new this.MongoClient(this.uri, { useNewUrlParser: true });
	
	(async () => {
	    await this.client.connect().catch(err => { console.log(err); });
	})();
    }

    public async put(key: string, value: string) : Promise<void> {
        console.log("put: key = " + key + ", value = " + value);
        let db = this.client.db(this.dbName);
        let collection = db.collection(this.collectionName);
        let result = await collection.updateOne({'name' : key}, { $set : { 'value' : value} }, { 'upsert' : true } );
        console.log("result = " + result);
    }

    public async get(key: string) : Promise<string> {

        let db = this.client.db(this.dbName);
        let collection = db.collection(this.collectionName);
        let result = await collection.findOne({'name': key})
        
        console.log("get: returned " + JSON.stringify(result));
        if (result) {
            return result.value;
        } else {
            return null;
        }
    }
    
    public async del(key: string) : Promise<void> {
        console.log("delete: key = " + key);
        let db = this.client.db(this.dbName);
        let collection = db.collection(this.collectionName);
        let result = await collection.deleteOne({'name': key})

        console.log('del: deleted ' + JSON.stringify(result));
        }
        
        public async isFound(key: string) : Promise<boolean>  {
            console.log("isFound: key = " + key);
            let v = await this.get(key);
            console.log("is found result = " + v);
            if (v === null) {
                return false;
            } else {
                return true;
            }
        }
}
