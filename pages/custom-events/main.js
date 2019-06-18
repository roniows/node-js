const events = require('events');
const event = new events.EventEmitter();

event.on('eTrigger',(e)=>{console.log(e)});

event.emit('eTrigger',"hello");