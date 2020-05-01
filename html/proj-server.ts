'use strict';

import { ProjRouting } from './proj-routing';
import { Database } from './mongo-db';

const theDatabase = new Database('jlattanzi4');
const theServer = new ProjRouting(theDatabase);

theServer.listen(process.env.PORT);