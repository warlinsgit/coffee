const mongoose = require('mongoose');

//map global promisses
//mongoose.Promise = global.Promise;
// mongoose connect




mongoose.connect("mongodb://localhost:27017/pusherpoll2", { useNewUrlParser: true })

.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));
