const mongoose = require('mongoose');
let Professional = require('./models/professional');

mongoose.connect('mongodb+srv://naomukai:STGG0f3zjWIrLJT8@cluster0.vqow74u.mongodb.net/MiniApp', 
                // {
                //     useNewUrlParser : false,
                // useUnifiedTopology: false,
                // useFindAndModify: false
               // }
                );

const ProfessionalSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    weight:Number,
    height:Number,
    isRetired:Boolean,
    nationality:String,
    oscarNumber:Number,
    profession:String
});

let professionalsModel = mongoose.model('professionals', ProfessionalSchema);


let professional1 = new professionalsModel({
    firstName:'Harrison',
    lastName:'Ford',
    age:81,
    weight:80,
    height:185,
    isRetired:false,
    nationality:'USA',
    oscarNumber:0,
    profession:'Producer'
});

let professional2 = new professionalsModel({
    firstName:'Sean',
    lastName:'Connery',
    age:90,
    weight:93,
    height:188,
    isRetired:true,
    nationality: 'UK',
    oscarNumber:1,
    profession:'Producer'
});

let professional3 = new professionalsModel({
    firstName:'Johnny',
    lastName:'Depp',
    age:60,
    weight:75,
    height:178,
    isRetired:false,
    nationality: 'USA',
    oscarNumber:3,
    profession:'Producer'
});

let professional4 = new professionalsModel({
    firstName:'Steven',
    lastName:'Spielberg',
    age:76,
    weight:70,
    height:172,
    isRetired:false,
    nationality:'USA',
    oscarNumber:23,
    profession:'Director'
});

let professional5 = new professionalsModel({
    firstName:'Gore',
    lastName:'Verbinski',
    age:59,
    weight:90,
    height:185,
    isRetired:false,
    nationality:'USA',
    oscarNumber:1,
    profession:'Director'
});

let professional6 = new professionalsModel({
    firstName:'Jeffrey',
    lastName:'Boam',
    age:53,
    weight:60,
    height:165,
    isRetired:true,
    nationality:'USA',
    oscarNumber:0,
    profession:'Writer'
});

let professional7 = new professionalsModel({
    firstName:'Ted',
    lastName:'Eliott',
    age:62,
    weight:65,
    height:170,
    isRetired:false,
    nationality:'USA',
    oscarNumber:2,
    profession:'Writer'
});

function addMany(professionals){
    Professional.insertMany(professionals)
    .then(function(){
        console.log('Saved the document');
        mongoose.disconnect();
    })
    .catch(function(err){
        console.log('Error writing the document', err);
    })
}


addMany([professional1, professional2, professional3, professional4, professional5, professional6, professional7]);

