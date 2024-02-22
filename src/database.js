let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naomukai:STGG0f3zjWIrLJT8@cluster0.vqow74u.mongodb.net/MiniApp',
// {userNewUrlParser: true,
//  userUnifiedTopology: true}
 )

.then((db)=>{
    console.log('database connected on ' + db.connection.host)
})
.catch((error)=>{
    console.log(error)
})