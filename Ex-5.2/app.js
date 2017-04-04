var Emitter = require('events');
var eventConfig = require('./config').events;


var emitter = new Emitter();

emitter.on(eventConfig.GREET, function () {
     console.log("Saying Hi");
});

emitter.emit(eventConfig.GREET);
