'use strict';

import { ProjRouting } from './proj-routing';

const theServer = new ProjRouting();

theServer.listen(process.env.PORT);