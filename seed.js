const db = require('./models'); 
const data = require('./stateMeta.json'); 

db.StateMeta.deleteMany({}, (err, deletedStateMeta) => {
    db.StateMeta.create(data.states, (err, seededStateMeta) => {
        if (err) console.log(err);
        console.log(data.states.length, 'states created successfully');
        process.exit();
    });
});