var Emitter = require('./emitter.js');

var emitter = new Emitter();

emitter.on('greet', function () {
     console.log("Saying hello");
});

emitter.emit('greet');
