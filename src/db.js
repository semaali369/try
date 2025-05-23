const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/apiDB').then(()=>{
    console.log('connected to DB')
}).catch(()=>{
    console.log('unable to connected to DB')
})

