'use strict';
exports.__esModule = true;
var proj_routing_1 = require("./proj-routing");
var mongo_db_1 = require("./mongo-db");
var theDatabase = new mongo_db_1.Database('jlattanzi4');
var theServer = new proj_routing_1.ProjRouting(theDatabase);
theServer.listen(process.env.PORT || 8080);
